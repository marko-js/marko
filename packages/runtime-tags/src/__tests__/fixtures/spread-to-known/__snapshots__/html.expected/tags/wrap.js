import _child from "./child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/wrap.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(_._serialize_guard($scope0_reason, /* input.class, input.value */0));
  _child(input);
  _._serialize_if($scope0_reason, /* input.class, input.value */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input.class, input.value */0) && _._existing_scope($childScope)
  }, "__tests__/tags/wrap.marko", 0);
});