<template>
    <div class="sm">
        <a href="https://www.linkedin.com/in/sofiene-meksi-21766543/" target="_blank" rel="noopener noreferrer"><div class="icon linkedin"></div></a>
        <a href="https://github.com/meksof" target="_blank" rel="noopener noreferrer"><div class="icon github"></div></a>
    </div>
</template>

<script>
export default {
    name: "appSocialMedia"
}
</script>

<style lang="scss" scoped>
.sm {
    position: fixed;
    right: -30px;
    top: 50%;
    transform: rotate(270deg);
    .icon {
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position:  0% 0%;
        width: 40px;
        height: 40px;
    }
    .linkedin {
        background-image: url(../assets/img/linkedin.png);
    }
    .github {
        background-image: url(../assets/img/github.png);
    }
}
</style>