import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const data = _child({});
  _$.setTagVar(_scope0_id, _childScope, "__tests__/template.marko_0_data/var");
  _$.write(`<div>${_$.escapeXML(data)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "data": "1:8"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);