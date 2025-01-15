import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = x * 2;
  const z = y * 3;
  _$.write(`<div>${_$.escapeXML(z)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);