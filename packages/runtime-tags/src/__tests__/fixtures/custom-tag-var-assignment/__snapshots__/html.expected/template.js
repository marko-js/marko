import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $childScope = _$.peekNextScope();
  const count = _counter({});
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
  _$.write(`<button class=inc-parent>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/3")}</button>${_$.markResumeNode($scope0_id, "#button/2")}<button class=reset>reset</button>${_$.markResumeNode($scope0_id, "#button/4")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:10"
  });
});