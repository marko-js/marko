import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "hello";
  _._html(`<textarea>${_._attr_textarea_value($scope0_id, "#textarea/0", value, _._resume(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", $scope0_id))}</textarea>${_._el_resume($scope0_id, "#textarea/0")}<span>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _._resume_branch($scope0_id);
});