import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, input.renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(input.renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-closures/components/custom-tag.marko");