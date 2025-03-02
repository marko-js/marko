import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const name = "Marko";
  const _childScope = _$.peekNextScope();
  const data = _child({
    extra: 1
  });
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_0_data/var");
  const message = `${name} ${data}`;
  _$.write(`<div>${_$.escapeXML(message)}${_$.markResumeNode(_scope0_id, "#text/2")}</div>`);
  _$.writeScope(_scope0_id, {
    name,
    data,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    name: "1:6",
    data: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});