import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child/index.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _child({
    name: "World",
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write("This is the body content");
    })
  });
});