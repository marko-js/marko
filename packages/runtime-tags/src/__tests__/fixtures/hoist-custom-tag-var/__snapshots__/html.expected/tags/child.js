import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  const $return = _$.register(function (html) {
    el().innerHTML = html;
  }, "__tests__/tags/child.marko_0/_return", $scope0_id);
  _$.writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
  return $return;
});