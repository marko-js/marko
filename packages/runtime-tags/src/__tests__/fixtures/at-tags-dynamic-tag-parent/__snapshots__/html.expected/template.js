import Hello from "./tags/hello/index.marko";
const x = Hello;
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.dynamicTag($scope0_id, "#text/0", x, {
    footer: _$.attrTag({
      class: "my-footer",
      content: _$.registerContent("__tests__/template.marko_3_renderer", () => {
        const $scope3_id = _$.nextScopeId();
        _$.write("Footer content");
      }, $scope0_id)
    }),
    header: _$.attrTag({
      class: "my-header",
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("Header content");
      }, $scope0_id)
    })
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("Body content");
  }, $scope0_id), 0, 0);
});