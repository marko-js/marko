import * as _$ from "@marko/runtime-tags/debug/html";
import _myTag from "./tags/my-tag.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _myTag({
    content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write("Div");
    }, $scope0_id)
  });
  _myTag({
    as: "span",
    content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
      const $scope2_id = _$.nextScopeId();
      _$.write("Span");
    }, $scope0_id)
  });
});