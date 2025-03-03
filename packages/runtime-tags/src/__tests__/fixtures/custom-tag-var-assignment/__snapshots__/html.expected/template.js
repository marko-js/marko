import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  const count = _counter({});
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_0_count/var");
  _$.write(`<button class=inc-parent>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/3")}</button>${_$.markResumeNode(_scope0_id, "#button/2")}<button class=reset>reset</button>${_$.markResumeNode(_scope0_id, "#button/4")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:10"
  });
});