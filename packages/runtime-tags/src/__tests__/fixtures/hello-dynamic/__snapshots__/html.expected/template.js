import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._html(`Hello ${_._sep(_._serialize_guard($serialize, /* input.name */1))}${_._escape(input.name)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* input.name */1))}! Hello ${_._sep(_._serialize_guard($serialize, /* input.name */1))}${_._unescaped(input.name)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* input.name */1))}! Hello ${_._sep(_._serialize_guard($serialize, /* input.missing */2))}${_._unescaped(input.missing)}${_._el_resume($scope0_id, "#text/2", _._serialize_guard($serialize, /* input.missing */2))}!`);
  _._serialize_guard($serialize, /* input.name,input.missing */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});