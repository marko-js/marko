import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _counter({});
  _$.write("</div>");
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);