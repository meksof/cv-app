<template>
  <div>
    <div id="app" class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import EventBus from './event-bus';

export default {
  name: "app",
  data: () => {
    return {
      loading: false
    }
  },
  created: function() {
    // trigger loading spinner
    axios.interceptors.request.use((config) => {
      // this.loading = true;
      EventBus.$emit('loading', true);
      return config;
    }, (error) => {
      EventBus.$emit('loading', false);
      return Promise.reject(error);
    });
    axios.interceptors.response.use((response) => {
      EventBus.$emit('loading', false);
      return response;
    }, (error) => {
      EventBus.$emit('loading', false);
      EventBus.$emit('noDataError', true);
      return Promise.reject(error);
    });
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
