import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    tagName
  } = input;
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/0", tagName, {
    class: ["a", "b"]
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Hello World");
  }, _scope0_id), 0, 1);
});