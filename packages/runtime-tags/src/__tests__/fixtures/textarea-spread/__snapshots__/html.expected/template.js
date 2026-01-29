import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $textarea_input = input;
  _._html(`<textarea${_._attrs($textarea_input, "#textarea/0", $scope0_id, "textarea")}>${_._attr_textarea_value($scope0_id, "#textarea/0", $textarea_input.value, $textarea_input.valueChange)}</textarea>${_._el_resume($scope0_id, "#textarea/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_input");
  _._scope($scope0_id, {
    input
  }, "__tests__/template.marko", 0, {
    input: 0
  });
});