import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let setHtml = _child({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._script($scope1_id, "__tests__/template.marko_1_setHtml");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "1:2");
      _._resume_branch($scope1_id);
    })
  });
  _._scope($scope0_id, {
    setHtml
  }, "__tests__/template.marko", 0, {
    setHtml: "1:8"
  });
});