import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const count = _counter({});
  _$.setTagVar(_scope0_id, _childScope, "__tests__/template.marko_0_count/var");
  _$.write(`<button class=inc-parent>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count: count,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);