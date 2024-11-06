import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`Hello <!>${_$.escapeXML(input.name)}${_$.markResumeNode(_scope0_id, "#text/0")}! Hello <!>${_$.toString(input.name)}${_$.markResumeNode(_scope0_id, "#text/1")}! Hello <!>${_$.toString(input.missing)}${_$.markResumeNode(_scope0_id, "#text/2")}!`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/hello-dynamic/template.marko", _renderer);