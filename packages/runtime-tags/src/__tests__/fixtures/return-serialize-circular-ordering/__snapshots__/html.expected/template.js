import _letBatch from "./tags/let-batch.marko";
import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let value = 0;
  let setter = _letBatch({
    valueChange: _._resume(_new_value => {
      value = _new_value;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  if (true) {
    const $scope1_id = _._scope_id();
    _child({
      valueChange: _._resume(function () {
        setter();
      }, "__tests__/template.marko_1/valueChange2", $scope1_id)
    });
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }
  _._scope($scope0_id, {
    setter
  }, "__tests__/template.marko", 0, {
    setter: "2:12"
  });
});