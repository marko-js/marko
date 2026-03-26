import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input = _._serialize_guard($scope0_reason, /* input */0);
  const $scope0_id = _._scope_id();
  _._html(`${_._sep(($sg__input))}${_._escape(JSON.stringify(input))}${_._el_resume($scope0_id, "#text/0", ($sg__input))}`);
  (_._serialize_if($scope0_reason, /* input */0)) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});