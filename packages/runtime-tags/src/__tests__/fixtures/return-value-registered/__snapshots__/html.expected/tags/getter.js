import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/getter.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const getter = _$.register(() => {
    return "hello";
  }, "__tests__/tags/getter.marko_0/getter");
  const $return = getter;
  return $return;
});