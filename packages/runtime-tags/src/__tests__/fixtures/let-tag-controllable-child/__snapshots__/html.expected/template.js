import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let source = 1;
  const $childScope = _$.peekNextScope();
  _child({
    value: source,
    valueChange: _$.register(_new_source => {
      source = _new_source;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  _$.write(`source=<!>${_$.escapeXML(source)}${_$.markResumeNode($scope0_id, "#text/1")}`);
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});