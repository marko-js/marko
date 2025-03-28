import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    content,
    value
  } = input;
  _$.write("<div>");
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/0", content, value, 0, 0, 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    content,
    value
  }, "__tests__/tags/child.marko", 0, {
    content: "1:9",
    value: "1:18"
  });
});