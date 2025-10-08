import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    a,
    b
  } = input;
  _._html(`${_._sep(_._serialize_guard($serialize, /* input.a */1))}${_._escape(a)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* input.a */1))} ${_._sep(_._serialize_guard($serialize, /* input.b */2))}${_._escape(b)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* input.b */2))}`);
  _._serialize_guard($serialize, /* input.a, input.b */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});