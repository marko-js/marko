import * as _ from "@marko/runtime-tags/debug/html";
import _mySelect from "./tags/my-select.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "b";
  const $childScope = _._peek_scope_id();
  _mySelect({
    value: value,
    valueChange: _._resume(function (v) {
      value = v;
    }, "__tests__/template.marko_0/valueChange", $scope0_id),
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<option${_._attr_option_value("a")}>A</option><option${_._attr_option_value("b")}>B</option><option${_._attr_option_value("c")}>C</option>`);
    }, $scope0_id)
  });
  _._html(`<span>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</span>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});