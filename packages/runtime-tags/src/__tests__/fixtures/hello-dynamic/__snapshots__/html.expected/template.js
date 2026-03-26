import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_name = _._serialize_guard($scope0_reason, /* input.name */1),
    $sg__input_missing = _._serialize_guard($scope0_reason, /* input.missing */2);
  const $scope0_id = _._scope_id();
  _._html(`Hello ${_._sep(($sg__input_name))}${_._escape(input.name)}${_._el_resume($scope0_id, "#text/0", ($sg__input_name))}! Hello ${_._sep($sg__input_name)}${_._unescaped(input.name)}${_._el_resume($scope0_id, "#text/1", $sg__input_name)}! Hello ${_._sep(($sg__input_missing))}${_._unescaped(input.missing)}${_._el_resume($scope0_id, "#text/2", ($sg__input_missing))}!`);
  (_._serialize_if($scope0_reason, /* input.name, input.missing */0)) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);