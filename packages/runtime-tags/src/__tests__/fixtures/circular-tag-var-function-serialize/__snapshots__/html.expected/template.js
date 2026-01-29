import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = 0;
  const setter = _._resume(function () {
    value = 1;
  }, "__tests__/template.marko_0/setter", $scope0_id);
  if (true) {
    const $scope1_id = _._scope_id();
    _child({
      valueChange: _._resume(function () {
        setter();
      }, "__tests__/template.marko_1/valueChange", $scope1_id)
    });
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }
  _._scope($scope0_id, {
    setter
  }, "__tests__/template.marko", 0, {
    setter: "2:8"
  });
});