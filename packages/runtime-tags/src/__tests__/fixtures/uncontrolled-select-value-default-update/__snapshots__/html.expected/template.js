import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "a";
  _._attr_select_value($scope0_id, "#select/0", "a", void 0, () => {
    _._html(`<select><option></option><option${_._attr_option_value("a")}></option></select>`);
  });
  _._attr_select_value($scope0_id, "#select/1", "a", void 0, () => {
    _._html(`<select><option></option><option${_._attr_option_value("b")}></option></select>`);
  });
  _._attr_select_value($scope0_id, "#select/2", value, void 0, () => {
    _._html(`<select><option></option><option${_._attr_option_value("b")}></option></select>`);
  });
  _._attr_select_value($scope0_id, "#select/3", value, undefined, () => {
    _._html(`${_._el_resume($scope0_id, "#select/2")}<select><option></option><option${_._attr_option_value("b")}></option></select>`);
  });
  _._html(`${_._el_resume($scope0_id, "#select/3")}<button>Update</button>${_._el_resume($scope0_id, "#button/4")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});