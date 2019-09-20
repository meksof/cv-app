<template>
  <div class="mt-4">
    <div class="section-title">
      <h3>Missions / Projets</h3>
    </div>
    <!-- standard card -->
    <div
      class="card mt-3"
      :hidden="appliedFilter !== undefined && appliedFilter.length > 1 && !cardHasKeyword(project, appliedFilter)"
      v-bind:class="{'highlighted': appliedFilter !== undefined && appliedFilter.length > 1 }"
      v-for="project in cardItems"
      :key="project.id"
    >
      <div class="card-header row">
        <div class="col-5 col-sm-5">
          <h3 class="card-title" v-html="highlight(project.title, appliedFilter)"></h3>
          <span class="card-subtitle no-wrap" v-html="highlight(project.client, appliedFilter)"></span>
        </div>
        <div class="col-3 col-sm-3 d-flex align-items-start">
          <i class="icon stopwatch"></i>
          <span class="ff-c light-gray">{{ project.duration }}</span>
        </div>
        <div class="col-4 col-sm-4 d-flex align-items-start">
          <i class="icon group"></i>
          <span class="ff-c light-gray">{{ project.team }}</span>
        </div>
      </div>
      <div class="card-content mt-2">
        <div class="description" v-html="highlight(project.description, appliedFilter)"></div>
        <div class="more-info mt-2">
          <div
            v-if="project.roleList && Object.keys(project.roleList).length !== 0"
            class="more-info-trigger"
            v-bind:class="{open: project.moreInfo || (appliedFilter && appliedFilter.length > 1)}"
            v-on:click="toggleMoreInfo(project)"
            title="Plus d'info"
          ></div>
          <ul class="role" v-if="project.roleList && project.roleList.length != 0">
            <li
              v-for="role in project.roleList"
              :key="role"
              v-html="highlight( role, appliedFilter)"
            ></li>
          </ul>
        </div>
      </div>
      <div class="tags mt-2">
        <div
          class="tag"
          v-for="tag in project.tags"
          :key="tag.name"
          v-html="highlight(tag.name, appliedFilter)"
        ></div>
      </div>
    </div>
    <!-- show skills As a Card List only for mobile devices -->
    <appSkills :skills="skills" class="d-xl-none d-lg-none"></appSkills>

  </div>
</template>
<script>
import appSkills from './AppSkills.vue';

export default {
  components: {
    appSkills
  },
  name: "appCards",
  props: {
    cardItems: Array,
    appliedFilter: String,
    skills: Object
  },
  methods: {
    toggleMoreInfo: function(card) {
      card.moreInfo = !card.moreInfo;
    },
    highlight: function(value, searchKeyword) {
      if (!value) return "";
      if (!searchKeyword || searchKeyword.length < 2) return value;
      let searchRegex = new RegExp("(" + searchKeyword + ")", "ig"); // regex pattern string
      return value.replace(searchRegex, '<span class="il">$1</span>');
    },
    cardHasKeyword(card, keyword) {
      if (keyword.length < 2) return false;
      let searchRegex = new RegExp(keyword, "i"); // regex pattern
      // look into card object values
      let flattenCardValues = obsKeysToString(
        card,
        ["title", "description", "roleList", "tags", "client"],
        "|"
      );
      return searchRegex.test(flattenCardValues);
    }
  }
};

/**
 * Iterate over data, looks into values, and custom data search
 */
function obsKeysToString(o, k, sep) {
  // iterate over key array
  return (
    k
      .map(function(key) {
        // +++++ custom data search ++++++
        // tags are of type Array[{name: String}]
        if (key == "tags") {
          // look into "tag.name" object attribute
          let tagsArray = o[key].map(tag => tag.name);
          return tagsArray.join(sep);
        }
        // get object property value
        return o[key];
      })
      // filter out non-empty and defined property
      .filter(function(v) {
        return v;
      })
      // join the property value array with the separator
      .join(sep)
  );
}
</script>