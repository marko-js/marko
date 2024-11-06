import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    a,
    b
  } = input;
  _$.write(`<!>${_$.escapeXML(a)}${_$.markResumeNode(_scope0_id, "#text/0")} <!>${_$.escapeXML(b)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/input-destructure/template.marko", _renderer);