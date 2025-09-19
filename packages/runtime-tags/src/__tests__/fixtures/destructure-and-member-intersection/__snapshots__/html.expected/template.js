import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const {
    a,
    b
  } = input;
  _._html(`<div>${_._escape(input.a)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($serialize, /* input.a */2))}${_._sep(_._serialize_guard($serialize, /* a,b */0))}${_._escape(a + b)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($serialize, /* a,b */0))}</div>`);
  _._serialize_guard($serialize, /* input.a,a,b */1) && _._scope($scope0_id, {
    input_a: _._serialize_if($serialize, /* b */4) && input.a,
    b: _._serialize_if($serialize, /* a */3) && b
  }, "__tests__/template.marko", 0, {
    input_a: "1:9",
    b: "1:12"
  });
});