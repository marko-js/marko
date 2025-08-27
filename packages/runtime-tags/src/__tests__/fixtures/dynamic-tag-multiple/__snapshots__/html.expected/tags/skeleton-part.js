import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/skeleton-part.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.dynamicTag($scope0_id, "#text/0", input.as || "div", {}, 0, 0, _$.serializeGuard($serialize, /* input.as */0));
  _$.serializeGuard($serialize, /* input.as */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/skeleton-part.marko", 0);
});