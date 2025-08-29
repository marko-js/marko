function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    onClick = updateText
  } = {};
  _$.write(`<button>before</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_onClick");
  _$.writeScope($scope0_id, {
    onClick
  }, "__tests__/template.marko", 0, {
    onClick: "6:3"
  });
});