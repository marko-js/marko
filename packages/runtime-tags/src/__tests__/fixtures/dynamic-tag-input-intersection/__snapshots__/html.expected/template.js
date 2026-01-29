import _myTag from "./tags/my-tag.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _myTag({
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html("Div");
    }, $scope0_id)
  });
  _myTag({
    as: "span",
    content: _._content_resume("__tests__/template.marko_2_content", () => {
      _._scope_reason();
      const $scope2_id = _._scope_id();
      _._html("Span");
    }, $scope0_id)
  });
});