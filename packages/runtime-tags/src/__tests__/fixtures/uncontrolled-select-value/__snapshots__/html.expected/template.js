import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._attr_select_value($scope0_id, "#select/0", "b", void 0, () => {
    _._html(`<select><option${_._attr_option_value("a")}>A</option><option${_._attr_option_value("b")}>B</option><option${_._attr_option_value("c")}>C</option></select>`);
  });
});