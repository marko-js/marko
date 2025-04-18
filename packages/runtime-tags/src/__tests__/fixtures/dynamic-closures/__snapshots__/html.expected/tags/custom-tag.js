import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.dynamicTag($scope0_id, "#text/0", input.content, {}, 0, 0, _$.serializeGuard($serialize, /* input.content */0));
  _$.write("</div>");
  _$.serializeGuard($serialize, /* input.content */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});