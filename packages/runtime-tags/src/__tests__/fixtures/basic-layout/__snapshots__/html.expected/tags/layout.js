import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/layout.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    content
  } = input;
  _$.write("<body>");
  _$.dynamicTag($scope0_id, "#text/0", content, {}, 0, 0, 1);
  _$.writeTrailers("</body>");
});