import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/getter.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const getter = _._resume(() => {
    return "hello";
  }, "__tests__/tags/getter.marko_0/getter");
  const $return = getter;
  return $return;
});