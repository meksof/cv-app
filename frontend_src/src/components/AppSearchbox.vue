<template lang="html">
  <div class="search-box mt-3">
    <input type="text" v-model="searchKeyword" placeholder="Scrum ..." />
    <div
      class="search-icon"
      v-bind:style="{ display: searchKeyword == '' ? 'block' : 'none' }"
    >
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
    </div>
    <div
      class="clear-icon"
      v-bind:style="{ display: searchKeyword != '' ? 'block' : 'none' }"
      v-on:click="clearInput()"
    >
      <svg viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
        />
      </svg>
    </div>
  </div>
</template>
<script lang="js">
// import store from '../store';
export default {

    name: 'appSearchbox',
    props: [],
    data() {
        return {
            searchKeyword: ''
        }
    },
    methods: {
        clearInput() {
            this.searchKeyword = '';
        }
    },
    watch: {
      searchKeyword: function(val) {
          if (val !== undefined) {
              this.$emit('typing', this.searchKeyword);
              if (this.searchKeyword !== ''){
                this.$parent.userIsTyping = true;
                // keyword = this.searchKeyword;
                // store.setMessageAction(keyword);
              } else {
                this.$parent.userIsTyping = false;
              }
          }
      }
    }
}
</script>
