import * as _$ from "@marko/runtime-tags/debug/html";
import _parentEl from "./tags/parent-el.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const $childScope = _$.peekNextScope();
  const divName = _parentEl({});
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_divName/var");
  _$.write(`${_$.escapeXML(divName)}${_$.markResumeNode($scope0_id, "#text/2")}</div><span>`);
  const $childScope2 = _$.peekNextScope();
  const spanName = _parentEl({});
  _$.setTagVar($scope0_id, "#scopeOffset/4", $childScope2, "__tests__/template.marko_0_spanName/var");
  _$.write(`${_$.escapeXML(spanName)}${_$.markResumeNode($scope0_id, "#text/5")}</span>`);
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope),
    "#childScope/3": _$.writeExistingScope($childScope2)
  }, "__tests__/template.marko", 0);
});