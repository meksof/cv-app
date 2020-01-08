<template>
  <div class="s-card s-card-top bg-main-color profile">
    <div class="profile-image text-right">
      <img
        class="d-inline-block va-btm"
        v-if="profileInfo.image"
        :src="getProfileImage(profileInfo.image)"
        :alt="'Photo profil ' + profileInfo.fullName"
      />
    </div>
    <h1 class="page-title">
      {{ profileInfo.fullName }}
      <span class="subtitle">{{ profileInfo.jobTitle }}</span>
    </h1>
    <em class="ff-c fz-12">({{ profileInfo.expertiseDomain }})</em>
    <br />
    <div class="profile-exp-wrapper"></div>
    <div class="experience">
      {{ profileInfo.experience }} ANS <span>{{ "D'EXPÉRIENCE" }}</span>
    </div>
  </div>
</template>

<script>
import appConstants from "../constants";
export default {
  name: "appProfile",
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
