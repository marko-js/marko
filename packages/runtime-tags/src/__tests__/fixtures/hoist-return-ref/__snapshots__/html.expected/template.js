import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
import _source from "./tags/source.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $x_getter = _._hoist($scope0_id, "__tests__/template.marko_0_x/hoist");
  _child({
    y: $x_getter
  });
  let x = _source({});
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "2:9"
  });
  _._assert_hoist(x);
});