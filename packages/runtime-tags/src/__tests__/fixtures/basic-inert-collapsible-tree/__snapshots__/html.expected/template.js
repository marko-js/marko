import _comments from "./tags/comments.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.comments, input.path */0: _._serialize_guard($scope0_reason, /* input */0),
    /* input.comments */1: _._serialize_guard($scope0_reason, /* input */0),
    /* input.path */2: _._serialize_guard($scope0_reason, /* input */0)
  });
  _comments(input);
  _._serialize_guard($scope0_reason, /* input */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});