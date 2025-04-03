import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    tagName
  } = input;
  _$.dynamicTag($scope0_id, "#text/0", tagName, {
    class: ["a", "b"]
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("Hello World");
  }, $scope0_id), 0, 1);
});