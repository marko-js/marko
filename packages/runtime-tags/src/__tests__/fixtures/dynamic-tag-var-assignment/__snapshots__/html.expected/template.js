import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
_$.register(getCounter, "__tests__/template.marko_0/getCounter");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $getCounter_scope = _$.peekNextScopeId();
  const count = _$.dynamicTag($scope0_id, "#text/0", getCounter(), {});
  _$.setTagVar($scope0_id, "#scopeOffset/1", $getCounter_scope, "__tests__/template.marko_0_count/var");
  _$.write(`<button class=reset>reset</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});