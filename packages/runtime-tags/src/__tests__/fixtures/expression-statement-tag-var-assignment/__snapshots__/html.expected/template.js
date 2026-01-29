import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  let direction = undefined;
  _._html(`<button class=up>up</button>${_._el_resume($scope0_id, "#button/0")}<button class=down>down</button>${_._el_resume($scope0_id, "#button/1")}<button class=change>${_._escape(x)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x_direction");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    x,
    direction
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    direction: "2:6"
  });
  _._resume_branch($scope0_id);
});