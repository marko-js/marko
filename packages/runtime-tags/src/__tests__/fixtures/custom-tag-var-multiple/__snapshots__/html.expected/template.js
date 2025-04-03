import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $childScope = _$.peekNextScope();
  const data = _child({});
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_data/var");
  _$.write(`<div>${_$.escapeXML(data)}${_$.markResumeNode($scope0_id, "#text/2")}</div>`);
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});