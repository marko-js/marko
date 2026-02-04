import * as _ from "@marko/runtime-tags/debug/html";
import _test from "./tags/test.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let m = undefined;
  _._html("<div>");
  _._if(() => {
    if (m) {
      const $scope1_id = _._scope_id();
      _test({});
      _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _._html("</div>");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});