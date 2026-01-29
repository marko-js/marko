import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let disabled = true;
  _._html(`<input${_._attr("disabled", disabled)}>${_._el_resume($scope0_id, "#input/0")}<button>${_._escape(disabled ? "enable" : "disable")}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_disabled");
  _._scope($scope0_id, {
    disabled
  }, "__tests__/template.marko", 0, {
    disabled: "1:6"
  });
  _._resume_branch($scope0_id);
});