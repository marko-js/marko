function updateText(ev) {
  ev.target.textContent = "after";
}
_._resume(updateText, "__tests__/template.marko_0/updateText");
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const sum = function (a, b) {
    return a + b;
  };
  const onClick = updateText;
  _._html(`<div>${_._escape(sum(1, 2))}</div><button>before</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_onClick");
  _._scope($scope0_id, {
    onClick
  }, "__tests__/template.marko", 0, {
    onClick: "10:7"
  });
});