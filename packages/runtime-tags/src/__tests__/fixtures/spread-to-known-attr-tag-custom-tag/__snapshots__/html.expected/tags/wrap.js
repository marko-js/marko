import _child from "./child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/wrap.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    class: _class,
    ...rest
  } = input;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.class, input.option */0: _._serialize_guard($scope0_reason, /* input.class, rest.option */0),
    /* input.option */1: _._serialize_guard($scope0_reason, /* rest.option */1)
  });
  _child({
    class: _class,
    ...rest
  });
  _._serialize_if($scope0_reason, /* input.class, rest.option */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input.class, rest.option */0) && _._existing_scope($childScope)
  }, "__tests__/tags/wrap.marko", 0);
});