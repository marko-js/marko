function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const {
    onClick = updateText
  } = {};
  _._html(`<button>before</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_onClick");
  _._scope($scope0_id, {
    onClick
  }, "__tests__/template.marko", 0, {
    onClick: "6:3"
  });
});