import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, input.renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/2")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-interop/src/__tests__/fixtures/interop-nested-class-to-tags/components/tags-layout.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(input.renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-nested-class-to-tags/components/tags-layout.marko");