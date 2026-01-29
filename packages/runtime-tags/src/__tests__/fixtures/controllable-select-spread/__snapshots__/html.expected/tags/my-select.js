import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-select.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $select_input = input;
  _._html("<select");
  _._attr_select_value($scope0_id, "#select/0", $select_input.value, $select_input.valueChange, () => {
    _._attrs_content($select_input, "#select/0", $scope0_id, "select");
    _._html("</select>");
  });
  _._html(_._el_resume($scope0_id, "#select/0"));
  _._script($scope0_id, "__tests__/tags/my-select.marko_0_input");
  _._scope($scope0_id, {
    input
  }, "__tests__/tags/my-select.marko", 0, {
    input: 0
  });
});