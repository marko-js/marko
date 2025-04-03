import * as _$ from "@marko/runtime-tags/debug/html";
import _helloSetter from "./tags/hello-setter.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const el = _$.nodeRef($scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _helloSetter({
    el: el
  });
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});