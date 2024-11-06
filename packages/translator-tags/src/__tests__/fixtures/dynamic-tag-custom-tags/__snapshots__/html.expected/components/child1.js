import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<div>Child 1 has <!>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko");