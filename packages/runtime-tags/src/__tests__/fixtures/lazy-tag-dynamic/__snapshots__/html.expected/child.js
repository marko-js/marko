import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/child.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_value = _._serialize_guard($scope0_reason, /* input.value */2);
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(input.label)}${_._el_resume($scope0_id, "#text/0", (_._serialize_guard($scope0_reason, /* input.label */1)))}: ${_._sep(($sg__input_value))}${_._escape(input.value)}${_._el_resume($scope0_id, "#text/1", ($sg__input_value))}</div>`);
  (_._serialize_if($scope0_reason, /* input.label, input.value */0)) && _._scope($scope0_id, {}, "__tests__/child.marko", 0);
});