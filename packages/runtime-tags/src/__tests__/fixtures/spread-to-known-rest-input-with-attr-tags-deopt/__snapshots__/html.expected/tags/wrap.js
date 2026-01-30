import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./child.marko";
export default _._template("__tests__/tags/wrap.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $input_foo__closures = new Set();
  const {
    class: _class,
    foo,
    ...rest
  } = input;
  _._html(" ");
  _._dynamic_tag($scope0_id, "#text/0", _class ? 'span' : 'div', {
    ...rest,
    class: _class
  }, _._content_resume("__tests__/tags/wrap.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    const $scope1_reason = _._scope_reason();
    const $childScope = _._peek_scope_id();
    _._set_serialize_reason(_._serialize_guard($scope0_reason, /* input.foo */1));
    _child({
      foo: input.foo
    });
    _._subscribe($input_foo__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "#childScope/0": _._serialize_if($scope0_reason, /* input.foo */1) && _._existing_scope($childScope),
      "ClosureSignalIndex:input_foo": _._serialize_if($scope0_reason, /* input.foo */1) && 0
    }, "__tests__/tags/wrap.marko", "2:4"));
    _._resume_branch($scope1_id);
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.class, rest */0));
  _._scope($scope0_id, {
    input_foo: input.foo,
    _class: _._serialize_if($scope0_reason, /* rest */3) && _class,
    rest: _._serialize_if($scope0_reason, /* input.class */2) && rest,
    "ClosureScopes:input_foo": _._serialize_if($scope0_reason, /* input.foo */1) && $input_foo__closures
  }, "__tests__/tags/wrap.marko", 0, {
    input_foo: ["input.foo"],
    _class: "1:17",
    rest: "1:33"
  });
});