import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr({
    "selected": input.thing.selected
  })}>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, input.thing.renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(input.thing.renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/components/child.marko");