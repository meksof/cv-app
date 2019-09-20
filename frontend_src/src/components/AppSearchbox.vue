<template lang="html">
    <div class="search-box mt-3">
        <input type="text" placeholder="Scrum ..." v-on:keyup="imTyping($event)">
        <div class="search-icon"></div>
    </div>
</template>
<script lang="js">
// import store from '../store';
export default {

    name: 'appSearchbox',
    props: [],
    mounted() {}
    ,
    data() {
        return {}
    }

    ,
    methods: {
        imTyping($event) {
            this.$emit('typing', $event.target.value);
            // let keyword;
            if ($event.target.value !== ''){
                this.$parent.userIsTyping = true;
                // keyword = $event.target.value;
                // store.setMessageAction(keyword);
            } else {
                this.$parent.userIsTyping = false;
            }
        }
    }

    ,
    computed: {}
}

</script>