import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _childScope = _$.peekNextScope();
  _counter({});
  _$.write("</div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);