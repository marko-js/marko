import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _child({});
  _$.write("</div>");
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);