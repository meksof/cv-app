<template>
  <div class="home" v-bind:class="{'user-is-typing': userIsTyping}">
    <appHeader :jobTitle="jobTitle" :experience="experience" :fullName="'MEKSI Sofiane'"></appHeader>
    <div class="content mx-auto">
      <div class="sidebar">
        <div class="s-card s-card-top bg-deep-purple">
          <div class="profile-image">
            <img class="d-block mx-auto" src="../assets/img/profile-180.jpg" alt="Photo profil" />
          </div>
          <h1 class="page-title">{{ fullName }}<span class="subtitle">{{ jobTitle }}</span></h1>
          <em class="ff-c fz-12">(Angular 5+ , VueJS)</em>
          <br />
          {{ experience }} {{ "ans d'expérience" }}
        </div>
        <appSkills v-bind:skills="mySkills"></appSkills>
      </div>
      <div class="main">
        <appSearchbox v-on:typing="filterCards($event)"></appSearchbox>
        <appCards v-bind:card-items="myProjects" v-bind:appliedFilter="searchKeyword"></appCards>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from "../components/AppHeader.vue";
import appSearchbox from "../components/AppSearchbox.vue";
import appCards from "../components/AppCards";
import appSkills from "../components/AppSkills";
import axios from "axios";

export default {
  name: "home",
  components: {
    appHeader,
    appSearchbox,
    appCards,
    appSkills
  },
  data: () => {
    return {
      jobTitle: "DEV FRONT",
      fullName: "MEKSI Sofiane",
      experience: 6,
      userIsTyping: false,
      searchKeyword: "",
      myProjects: [],
      baseUrl:
        process.env.NODE_ENV == "development"
          ? "http://localhost:1337/"
          : "http://dev-front.herokuapp.com/",
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
  projects { 
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
  technicalSkills: skills (where: { type: technique }){ 
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
