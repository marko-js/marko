import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className,
    other,
    renderBody
  } = input;
  _$.write(`<div${_$.classAttr(className)}${_$.attr("data-other", other)}>B `);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, renderBody, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(renderBody)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-name/components/tag-b/index.marko");