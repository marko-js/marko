import Hello from "./tags/hello/index.marko";
const x = Hello;
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", x, {
    footer: _.attrTag({
      class: "my-footer",
      content: _._content_resume("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html("Footer content");
      }, $scope0_id)
    }),
    header: _.attrTag({
      class: "my-header",
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("Header content");
      }, $scope0_id)
    })
  }, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("Body content");
  }, $scope0_id), 0, 0);
});