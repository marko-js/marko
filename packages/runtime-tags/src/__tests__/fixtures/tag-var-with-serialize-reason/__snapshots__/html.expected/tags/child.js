import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._if(() => {
    if (input.value) {
      const $scope1_id = _._scope_id();
      _._html("<span></span>");
      _._serialize_if($scope0_reason, /* input.value */0) && _._scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0), 0, 1);
  const $return = 1;
  _._serialize_if($scope0_reason, /* input.value */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
  return $return;
});