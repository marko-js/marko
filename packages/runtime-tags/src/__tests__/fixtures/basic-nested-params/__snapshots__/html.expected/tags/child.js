import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    content,
    value
  } = input;
  _$.write("<div>");
  _$.dynamicTag($scope0_id, "#text/0", content, [value], 0, 1, _$.serializeGuard($serialize, /* content,value */0));
  _$.write("</div>");
  _$.serializeGuard($serialize, /* content,value */0) && _$.writeScope($scope0_id, {
    content: _$.serializeIf($serialize, /* input.value */2) && content,
    value: _$.serializeIf($serialize, /* input.content */1) && value
  }, "__tests__/tags/child.marko", 0, {
    content: "1:9",
    value: "1:18"
  });
});