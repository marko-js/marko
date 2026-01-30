import _child from "./tags/child.marko";
import _source from "./tags/source.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _child({
    action: _._resume(function () {
      (api => api())(_._hoist_read_error).addClass("child");
    }, "__tests__/template.marko_0/action", $scope0_id)
  });
  let api = _source({});
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    api
  }, "__tests__/template.marko", 0, {
    api: "3:9"
  });
  _._assert_hoist(api);
});