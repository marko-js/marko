import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    renderBody,
    value
  } = input;
  _$.write("<div>");
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, renderBody, value);
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "value": value,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-params/components/child.marko", _renderer);