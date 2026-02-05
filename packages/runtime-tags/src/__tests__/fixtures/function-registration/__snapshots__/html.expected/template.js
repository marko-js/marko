function sum(a, b) {
  return a + b;
}
const add1 = v => ((0, sum))(1, v);
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(sum(1, 2))}</div><div>${_._escape(add1(3))}</div><button>before</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});