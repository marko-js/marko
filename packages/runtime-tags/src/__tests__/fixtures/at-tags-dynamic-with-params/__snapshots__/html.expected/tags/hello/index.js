import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello/index.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", input.item, [1], 0, 1, _._serialize_guard($serialize, /* input.item */0));
  _._serialize_guard($serialize, /* input.item */0) && _._scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});