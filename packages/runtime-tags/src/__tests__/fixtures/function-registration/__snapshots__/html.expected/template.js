function sum(a, b) {
  return a + b;
}
const add1 = v => (0, sum)(1, v);
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(sum(1, 2))}</div><div>${_$.escapeXML(add1(3))}</div><button>before</button>${_$.markResumeNode($scope0_id, "#button/2")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});