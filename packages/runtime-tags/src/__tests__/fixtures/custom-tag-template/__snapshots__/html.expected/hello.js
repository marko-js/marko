import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`Hello <!>${_$.escapeXML(input.name)}${_$.markResumeNode(_scope0_id, "#text/0")}!`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/hello.marko", _renderer);