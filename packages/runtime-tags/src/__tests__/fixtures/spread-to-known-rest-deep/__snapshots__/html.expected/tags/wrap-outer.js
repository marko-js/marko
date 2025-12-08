import _wrap from "./wrap.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/wrap-outer.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    value,
    ...rest
  } = input;
  const $childScope = _._peek_scope_id();
  _wrap({
    value: "abcd",
    ...rest
  });
  _._serialize_if($scope0_reason, /* rest.class */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* rest.class */0) && _._existing_scope($childScope)
  }, "__tests__/tags/wrap-outer.marko", 0);
});