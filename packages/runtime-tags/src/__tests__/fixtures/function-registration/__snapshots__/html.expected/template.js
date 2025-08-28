function sum(a, b) {
  return a + b;
}
const add1 = v => (0, sum)(1, v);
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(sum(1, 2))}</div><div>${_$.escapeXML(add1(3))}</div>`);
});