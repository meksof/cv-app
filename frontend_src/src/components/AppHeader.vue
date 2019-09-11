<template>
  <div class="header">
    <div class="card card-top d-flex bg-deep-purple mx-auto">
      <div class="profile-image">
        <img src="../assets/img/profile.jpg" alt="Photo profil">
      </div>
      <div class="my-auto mx-auto">
        <h1 class="page-title">{{ fullName }}<span class="subtitle">{{ jobTitle }}</span></h1>
        <em class="ff-c fz-12">(Angular 5+ , VueJS)</em>
        <br>
        {{ experience }} {{ "ans d'expérience" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  props: {
    jobTitle: String,
    experience: Number,
    fullName: String
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
