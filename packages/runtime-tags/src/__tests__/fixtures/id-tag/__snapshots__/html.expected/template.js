import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const x = _$.nextTagId();
  const y = _$.nextTagId();
  _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);