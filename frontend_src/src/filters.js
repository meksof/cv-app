import Vue from "vue";

Vue.filter("uppercase", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter("highlightSearchKeyword", function(value, searchKeyword) {
  if (!value) return "";
  if (!searchKeyword) return value;
  let searchRegex = new RegExp(searchKeyword, "g"); // regex pattern string
  return value.replace(
    searchRegex,
    '<span class="il">' + searchKeyword + "</span>"
  );
});

export default Vue;
