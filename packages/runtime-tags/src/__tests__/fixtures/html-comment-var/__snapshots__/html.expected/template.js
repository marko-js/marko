import * as _$ from "@marko/runtime-tags/debug/html";
import _parentEl from "./tags/parent-el.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _childScope = _$.peekNextScope();
  const divName = _parentEl({});
  _$.setTagVar(_scope0_id, _childScope, "__tests__/template.marko_0_divName/var");
  _$.write(`${_$.escapeXML(divName)}${_$.markResumeNode(_scope0_id, "#text/1")}</div><span>`);
  const _childScope2 = _$.peekNextScope();
  const spanName = _parentEl({});
  _$.setTagVar(_scope0_id, _childScope2, "__tests__/template.marko_0_spanName/var");
  _$.write(`${_$.escapeXML(spanName)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/2": _$.writeExistingScope(_childScope2)
  }, "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);