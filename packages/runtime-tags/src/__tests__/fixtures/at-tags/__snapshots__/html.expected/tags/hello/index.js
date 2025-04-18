import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/hello/index.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.dynamicTag($scope0_id, "#text/0", input.foo, {}, 0, 0, _$.serializeGuard($serialize, /* input.foo */0));
  _$.serializeGuard($serialize, /* input.foo */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});