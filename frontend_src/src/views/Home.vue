<template>
  <div class="home" v-bind:class="{'user-is-typing': userIsTyping}">
    <appHeader :profileInfo="profile"></appHeader>
    <div class="content mx-auto">
      <div class="sidebar">
        <div class="s-card s-card-top bg-deep-purple">
          <div class="profile-image">
            <img class="d-block mx-auto" src="../assets/img/profile-180.jpg" alt="Photo profil" />
          </div>
          <h1 class="page-title">{{ profile.fullName }}<span class="subtitle">{{ profile.jobTitle }}</span></h1>
          <em class="ff-c fz-12">({{ profile.expertiseDomain }})</em>
          <br />
          {{ profile.experience }} {{ "ans d'expérience" }}
        </div>
        <appSkills v-bind:skills="mySkills"></appSkills>
      </div>
      <div class="main">
        <appSearchbox v-on:typing="filterCards($event)"></appSearchbox>
        <!-- summary -->
        <appSummary :summary="profile.summary"></appSummary>
        <appCards :card-items="myProjects" :appliedFilter="searchKeyword" :skills="mySkills"></appCards>
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
      baseUrl:
        process.env.NODE_ENV == "development"
          ? "http://localhost:1337/"
          : "https://dev-front.herokuapp.com/",
      mySkills: {
        technicalSkills: [],
        languageSkills: []
      }
      // EXPECTED DATA:
      /* { 
          type: "technique",
          name: "html",
          level: 5
        },
        {
          type: "technique",
          name: "CSS - SASS / LESS",
          level: 5
        },
        {
          type: "technique",
          name: "Angular",
          level: 4
        },
        {
          type: "technique",
          name: "javascript",
          level: 3
        },
        {
          type: "technique",
          name: "typescript",
          level: 3
        },
        {
          type: "technique",
          name: "mySQL",
          level: 2
        },
        {
          type: "langue",
          name: "Français",
          written: {
            level: 4
          },
          spoken: {
            level: 3
          }
        },
        {
          type: "langue",
          name: "English",
          written: {
            level: 4
          },
          spoken: {
            level: 2
          }
        }, */
    };
  },
  methods: {
    fetchData() {
      axios
        .post(this.baseUrl + "graphql", {
          query: `query getCVDATA {
  profiles (limit: 1) {
    summary
    experience
    fullName
    jobTitle
    expertiseDomain
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
                this.mySkills.technicalSkills = response.data.data.technicalSkills;
              }
              if (
                response.data.data.languageSkills &&
                response.data.data.languageSkills.length > 0
              ) {
                this.mySkills.languageSkills = response.data.data.languageSkills;
              }
              if ( response.data.data.profiles ) {
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
    this.fetchData();
  }
};
</script>
