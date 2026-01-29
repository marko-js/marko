import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _child({
    button: _.attrTag({
      onClick: _._resume(function () {}, "__tests__/template.marko_0/onClick"),
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("one");
      }, $scope0_id)
    })
  });
});