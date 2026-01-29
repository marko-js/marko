import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/store.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let list = input.value;
  const $return = {
    list,
    listChange: _._resume(function (v) {
      list = v;
    }, "__tests__/tags/store.marko_0/_return", $scope0_id),
    clear: _._resume(function () {
      list = [];
    }, "__tests__/tags/store.marko_0/_return2", $scope0_id)
  };
  _._resume_branch($scope0_id);
  return $return;
});