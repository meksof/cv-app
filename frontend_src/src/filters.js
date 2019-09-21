import Vue from "vue";

Vue.filter("uppercase", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

/**
 *  Apply and Highlight a Keyword to "value"
 *  @param searchKeyword: applied keyword
 */
Vue.filter("highlightSearchKeyword", function(value, searchKeyword) {
  if (!value) return "";
  if (!searchKeyword) return value;
  let searchRegex = new RegExp(searchKeyword, "g"); // regex pattern string
  return value.replace(
    searchRegex,
    '<span class="il">' + searchKeyword + "</span>"
  );
});
/** 
 *  @param maxLength: when this filter function is applied, the "value" will be 
 *                    truncated to "maxLength" caracters
 *  @param extraString: If exists, the truncated text will add this "extraString",
 *                    Ex: '...'
 *  @param noFilter: whether apply or not this filter
*/
Vue.filter('truncate', function (value, maxLength, extraString = '',  noFilter) {
  if (!value && typeof(value) !== 'string') return '';
  return !noFilter ? value.replace(value.substr(maxLength+1), '') + extraString : value;
})
export default Vue;
