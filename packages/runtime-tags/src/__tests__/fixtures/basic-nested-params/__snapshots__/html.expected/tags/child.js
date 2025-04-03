import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    content,
    value
  } = input;
  _$.write("<div>");
  _$.dynamicTag($scope0_id, "#text/0", content, [value], 0, 1, 1);
  _$.write("</div>");
  _$.writeScope($scope0_id, {
    content,
    value
  }, "__tests__/tags/child.marko", 0, {
    content: "1:9",
    value: "1:18"
  });
});