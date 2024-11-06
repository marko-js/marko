import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    thing: {
      x,
      renderBody
    }
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<div>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/components/custom-tag/index.marko");