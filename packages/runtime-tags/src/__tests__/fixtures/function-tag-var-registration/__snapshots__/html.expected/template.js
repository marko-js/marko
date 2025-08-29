function updateText(ev) {
  ev.target.textContent = "after";
}
_$.register(updateText, "__tests__/template.marko_0/updateText");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const sum = function (a, b) {
    return a + b;
  };
  const onClick = updateText;
  _$.write(`<div>${_$.escapeXML(sum(1, 2))}</div><button>before</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_onClick");
  _$.writeScope($scope0_id, {
    onClick
  }, "__tests__/template.marko", 0, {
    onClick: "10:7"
  });
});