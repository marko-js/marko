import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const output = _._el($scope0_id, "__tests__/template.marko_0/#div");
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(_._serialize_guard($serialize, /* input.foo */0));
  _child({
    foo: input.foo,
    output: output
  });
  _._scope($scope0_id, {
    "#childScope/1": _._serialize_if($serialize, /* input.foo */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});