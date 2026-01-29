import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  _._dynamic_tag($scope0_id, "#text/0", x === 1 ? baz : foo, {}, 0, 0, 0);
  _._resume_branch($scope0_id);
});