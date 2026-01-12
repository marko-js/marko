import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const value = 1;
  _child({
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._html(_._escape(value));
      _._resume_branch($scope1_id);
    })
  });
});