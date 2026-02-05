import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_class(input.foo)}${_._attr("foo", ('a' + input.foo + 'b'))}${_._attr("bar", `a ${input.bar} b`)}${_._attr("nested", `a ${input.foo + ` nested ${input.bar}`} b`)}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($scope0_reason, /* input.foo, input.bar */0))}`);
  _._serialize_if($scope0_reason, /* input.foo, input.bar */0) && _._scope($scope0_id, {
    input_foo: _._serialize_if($scope0_reason, /* input.bar */2) && input.foo,
    input_bar: _._serialize_if($scope0_reason, /* input.foo */1) && input.bar
  }, "__tests__/template.marko", 0, {
    input_foo: ["input.foo"],
    input_bar: ["input.bar"]
  });
});