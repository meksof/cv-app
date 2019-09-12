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

Vue.filter('truncate', function (value, maxLength, noFilter) {
  if (!value && typeof(value) !== 'string') return '';
  return !noFilter ? value.replace(value.substr(maxLength+1), '') : value;
})
export default Vue;
