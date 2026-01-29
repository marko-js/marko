import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  let yChange = _._resume(function (newValue) {
    x = newValue + 1;
  }, "__tests__/template.marko_0/yChange", $scope0_id);
  let y = x;
  _._html(`<button id=inc>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}|<!>${_._escape(y)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}<button id=toggle>toggle</button>${_._el_resume($scope0_id, "#button/3")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_y");
  _._scope($scope0_id, {
    x,
    yChange,
    y,
    "TagVariableChange:y": yChange || void 0
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    yChange: "2:6",
    y: "3:6"
  });
  _._resume_branch($scope0_id);
});