import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(input.a)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* input.a */1))}</div><div>${_._escape(input.b)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* input.b */2))}</div>`);
  _._serialize_guard($serialize, /* input.a, input.b */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});