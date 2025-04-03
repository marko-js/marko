import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/list/index.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeForOf(input.item, item => {
    const $scope1_id = _$.nextScopeId();
    _$.dynamicTag($scope1_id, "#text/0", item.content, {}, 0, 0, 1);
  }, 0, $scope0_id, "#text/0");
});