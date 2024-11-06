import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    a: {
      b
    }
  } = input;
  const {
    a
  } = input;
  const {
    b: c
  } = a;
  _$.write(`<button>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/0")} <!>${_$.escapeXML(c)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>`);
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/same-source-alias-pattern-and-identifier/template.marko");