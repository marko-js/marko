import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const value = 1;
  _child({
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._html(_._escape(value));
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "2:2");
      _._resume_branch($scope1_id);
    }, $scope0_id)
  });
  _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:8"
  });
});