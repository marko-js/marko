import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "b";
  _._attr_select_value($scope0_id, "#select/0", value, _._resume(function (v) {
    value = v;
  }, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
    _._html(`<select><option${_._attr_option_value("a")}>A</option><option${_._attr_option_value("b")}>B</option><option${_._attr_option_value("c")}>C</option></select>`);
  });
  _._html(`${_._el_resume($scope0_id, "#select/0")}<span>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _._resume_branch($scope0_id);
});