import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    renderBody,
    ...attrs
  } = input;
  _$.write(`<button${_$.attrs(attrs, "#button/0", _scope0_id, "button")}>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko_0_attrs");
  _$.writeScope(_scope0_id, {
    "attrs": attrs,
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko");