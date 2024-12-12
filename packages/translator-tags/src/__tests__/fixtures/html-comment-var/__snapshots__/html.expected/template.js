import * as _$ from "@marko/runtime-tags/debug/html";
import _parentEl from "./components/parent-el.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _childScope = _$.peekNextScope();
  const divName = _parentEl({}, _$.register(() => {}, "__tests__/template.marko_0_divName/var", _scope0_id));
  _$.write(`${_$.escapeXML(divName)}${_$.markResumeNode(_scope0_id, "#text/1")}</div><span>`);
  const _childScope2 = _$.peekNextScope();
  const spanName = _parentEl({}, _$.register(() => {}, "__tests__/template.marko_0_spanName/var", _scope0_id));
  _$.write(`${_$.escapeXML(spanName)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/2": _$.writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);