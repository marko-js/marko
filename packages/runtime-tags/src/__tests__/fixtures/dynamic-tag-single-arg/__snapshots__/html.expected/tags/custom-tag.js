import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(input)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input */0))}</div>`);
  const $return = "hello from other";
  _._serialize_guard($scope0_reason, /* input */0) && _._scope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
  return $return;
});