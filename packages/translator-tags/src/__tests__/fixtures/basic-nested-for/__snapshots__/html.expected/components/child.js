import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-for/components/child.marko", _renderer);