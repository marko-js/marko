import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/layout.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    content
  } = input;
  _$.write("<body>");
  _$.dynamicTag($scope0_id, "#text/0", content, {}, 0, 0, _$.serializeGuard($serialize, /* content */0));
  _$.writeTrailers("</body>");
  _$.serializeGuard($serialize, /* content */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});