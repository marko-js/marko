import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let name = "Marko";
  const $childScope = _$.peekNextScopeId();
  let data = _child({
    extra: 1
  });
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_data/var");
  const message = `${name} ${data}`;
  _$.write(`<div>${_$.escapeXML(message)}${_$.markResumeNode($scope0_id, "#text/2")}</div>`);
  _$.writeScope($scope0_id, {
    name,
    data,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    name: "1:6",
    data: "2:8"
  });
  _$.resumeClosestBranch($scope0_id);
});