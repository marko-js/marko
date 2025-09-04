import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", input.foo, {}, 0, 0, _._serialize_guard($serialize, /* input.foo */0));
  _._serialize_guard($serialize, /* input.foo */0) && _._scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});