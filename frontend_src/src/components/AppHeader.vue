<template>
  <div class="header">
    <div class="card card-top d-flex bg-main-color mx-auto">
      <div class="profile-image">
        <img
          v-if="profileInfo.image"
          :src="getProfileImage(profileInfo.image)"
          :alt="'Photo profil ' + profileInfo.fullName"
          class="img-fluid"
        />
      </div>
      <div class="my-auto profile-title">
        <h1 class="page-title">
          {{ profileInfo.fullName
          }}<span class="subtitle">{{ profileInfo.jobTitle }}</span>
        </h1>
        <em class="ff-c fz-12">({{ profileInfo.expertiseDomain }})</em>
        <br />
        {{ profileInfo.experience }} {{ "ans d'expérience" }}
      </div>
      <appSocialMedia></appSocialMedia>
    </div>
  </div>
</template>
<script>
import appConstants from "../constants";
import appSocialMedia from "./AppSocialMedia";
export default {
  name: "appHeader",
  components: {
    appSocialMedia
  },
  props: {
    profileInfo: Object
  },
  data: () => {
    return {
      baseUrl: appConstants.WEBSITE_URL
    };
  },
  methods: {
    getProfileImage: function(profileImgObj) {
      return profileImgObj
        ? profileImgObj.provider == "local"
          ? this.baseUrl + profileImgObj.url
          : profileImgObj.url
        : "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  @media screen and (min-width: 480px) {
    margin-right: auto;
    margin-left: auto;
  }
  margin-right: -15px;
  margin-left: -15px;
}
h1 {
  margin-bottom: 0;
  margin-top: 0;
}

.profile-image {
  float: left;
  width: 88px;
}
</style>
