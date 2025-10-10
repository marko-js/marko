import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/thing.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", input.what, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.what */0));
  _._serialize_if($scope0_reason, /* input.what */0) && _._scope($scope0_id, {}, "__tests__/tags/thing.marko", 0);
});