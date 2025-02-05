import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(input)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  const _return = "hello from other";
  return _return;
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _renderer);