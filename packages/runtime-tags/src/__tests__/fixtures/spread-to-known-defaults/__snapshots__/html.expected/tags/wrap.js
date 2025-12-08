import _child from "./child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/wrap.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(_._serialize_guard($scope0_reason, /* input.class */1));
  _child({
    ...input,
    value: "override"
  });
  const $childScope2 = _._peek_scope_id();
  _._set_serialize_reason(_._serialize_guard($scope0_reason, /* input */0));
  _child({
    value: "default",
    ...input
  });
  _._serialize_if($scope0_reason, /* input */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input.class */1) && _._existing_scope($childScope),
    "#childScope/1": _._serialize_if($scope0_reason, /* input */0) && _._existing_scope($childScope2)
  }, "__tests__/tags/wrap.marko", 0);
});