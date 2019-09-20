<template>
  <div class="home" v-bind:class="{'user-is-typing': userIsTyping}">
    <div class="no-data" v-if="noDataError">
      <span>On n'arrive pas à avoir les données, Veuillez vérifier votre connexion</span>
    </div>
    <div class="page-loader" v-if="loading">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <appHeader :profileInfo="profile"></appHeader>
    <div class="content mx-auto" style="position: relative;">
      <div class="sidebar">
        <div class="s-card s-card-top bg-deep-purple">
          <div class="profile-image">
            <img
              class="d-block mx-auto"
              v-if="profile.image"
              :src="profile.image.url"
              :alt="'Photo profil ' + profile.fullName"
            />
          </div>
          <h1 class="page-title">
            {{ profile.fullName }}
            <span class="subtitle">{{ profile.jobTitle }}</span>
          </h1>
          <em class="ff-c fz-12">({{ profile.expertiseDomain }})</em>
          <br />
          {{ profile.experience }} {{ "ans d'expérience" }}
        </div>
        <appSkills v-bind:skills="mySkills"></appSkills>
      </div>
      <div class="main">
        <appSearchbox v-on:typing="filterCards($event)"></appSearchbox>
        <!-- summary -->
        <appSummary v-if="profile.summary" :summary="profile.summary"></appSummary>
        <appCards
          v-if="myProjects.length > 0"
          :card-items="myProjects"
          :appliedFilter="searchKeyword"
          :skills="mySkills"
        ></appCards>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "../components/AppHeader.vue";
import appSummary from "../components/AppSummary.vue";
import appSearchbox from "../components/AppSearchbox.vue";
import appCards from "../components/AppCards";
import appSkills from "../components/AppSkills";
import axios from "axios";
import appConstants from "../constants";
import EventBus from "../event-bus";
export default {
  name: "home",
  components: {
    appHeader,
    appSummary,
    appSearchbox,
    appCards,
    appSkills
  },
  data: () => {
    return {
      userIsTyping: false,
      searchKeyword: "",
      profile: {},
      myProjects: [],
      // baseUrl: this.$data.$baseUrl,
      baseUrl: appConstants.WEBSITE_URL,
      mySkills: {
        technicalSkills: [],
        languageSkills: []
      },
      loading: false,
      noDataError: false
    };
  },
  methods: {
    fetchData() {
      axios
        .post(this.baseUrl + "/graphql", {
          query: `query getCVDATA {
  profiles (limit: 1) {
    summary
    experience
    fullName
    jobTitle
    expertiseDomain
    image {
      url
    }
  }
  projects (sort: "start_date:desc") { 
    title
    client
    duration
    team
    description
    roleList
    tags {
      name
    }
  }
  technicalSkills: skills (sort: "level:desc",where: { type: technique }){ 
    name
    level
  } 
  languageSkills: skills (where: { type: langue }){ 
    name
    spoken_level
    written_level
  } 
}`
        })
        .then(response => {
          if (response.status == 200) {
            // Get projects data
            // And add new key `moreInfo` to original data
            if (response.data) {
              if (
                response.data.data.projects &&
                response.data.data.projects.length > 0
              ) {
                let projects = response.data.data.projects;
                this.myProjects = projects.map(project => {
                  let o = Object.assign({}, project);
                  o.moreInfo = false;
                  return o;
                });
              }
              if (
                response.data.data.technicalSkills &&
                response.data.data.technicalSkills.length > 0
              ) {
                this.mySkills.technicalSkills =
                  response.data.data.technicalSkills;
              }
              if (
                response.data.data.languageSkills &&
                response.data.data.languageSkills.length > 0
              ) {
                this.mySkills.languageSkills =
                  response.data.data.languageSkills;
              }
              if (response.data.data.profiles) {
                this.profile = response.data.data.profiles[0]; // get first item from list
              }
            }
          }
        });
    },
    filterCards($event) {
      this.searchKeyword = $event;
      // fire filter cards event
    }
  },
  created: function() {
    // Show err message when no data
    EventBus.$on("noDataError", payLoad => {
      this.noDataError = payLoad;
    });
    // Show / Hide Loading spinner
    EventBus.$on("loading", payLoad => {
      this.loading = payLoad;
    });
    this.fetchData();
  }
};
</script>
