import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _child({
    fn: () => (x => x())(_._hoist_read_error)
  });
  const x = 1;
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "5:8"
  });
  _._assert_hoist(x);
});