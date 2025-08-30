import _getter from "./tags/getter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let get = _getter({});
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_get");
  _$.writeScope($scope0_id, {
    get
  }, "__tests__/template.marko", 0, {
    get: "1:9"
  });
});