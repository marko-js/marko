import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    id
  } = input;
  _._html(`<div>Id is ${_._sep(_._serialize_guard($scope0_reason, /* input.id */0))}${_._escape(id)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.id */0))}</div>`);
  _._serialize_if($scope0_reason, /* input.id */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});