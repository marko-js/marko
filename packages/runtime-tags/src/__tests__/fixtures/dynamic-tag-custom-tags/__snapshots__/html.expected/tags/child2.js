import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child2.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    value
  } = input;
  _._html(`<div>Child 2 has ${_._sep(_._serialize_guard($serialize, /* value */0))}${_._escape(value)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* value */0))}</div>`);
  _._serialize_guard($serialize, /* value */0) && _._scope($scope0_id, {}, "__tests__/tags/child2.marko", 0);
});