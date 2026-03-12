import _customInput from "./tags/custom-input.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.value, input.valueChange */0: /* value */1
  });
  _customInput({
    value: value,
    valueChange: _._resume(_new_value => {
      value = _new_value;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  _._html(`<span>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")} <!>${_._escape(typeof value)}${_._el_resume($scope0_id, "#text/2")}</span>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
}, 1);