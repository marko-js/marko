import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  let y = 1;
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}${_._escape(y)}${_._el_resume($scope0_id, "#text/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x_y");
  _._scope($scope0_id, {
    x,
    y,
    "TagVariableChange:y": false || void 0
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _._resume_branch($scope0_id);
});