import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _child({
    action: _._resume(function () {
      ($el => $el())(_._el_read_error).classList.add("child1");
    }, "__tests__/template.marko_0/action", $scope0_id)
  });
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _child({
    action: _._resume(function () {
      ($el => $el())(_._el_read_error).classList.add("child2");
    }, "__tests__/template.marko_0/action2", $scope0_id)
  });
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});