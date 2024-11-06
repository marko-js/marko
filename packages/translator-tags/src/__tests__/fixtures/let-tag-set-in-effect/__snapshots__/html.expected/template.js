import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 0;
  _$.write(`<span>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/0")}</span><span>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko");