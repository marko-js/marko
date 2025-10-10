import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    a,
    b
  } = input;
  _._html(`<div>${_._escape(input.a)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.a */1))}${_._sep(_._serialize_guard($scope0_reason, /* input.a, input.b */0))}${_._escape(a + b)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.a, input.b */0))}</div>`);
  _._serialize_if($scope0_reason, /* input.a, input.b */0) && _._scope($scope0_id, {
    input_a: _._serialize_if($scope0_reason, /* input.b */2) && input.a,
    b: _._serialize_if($scope0_reason, /* input.a */1) && b
  }, "__tests__/template.marko", 0, {
    input_a: ["input.a"],
    b: "1:12"
  });
});