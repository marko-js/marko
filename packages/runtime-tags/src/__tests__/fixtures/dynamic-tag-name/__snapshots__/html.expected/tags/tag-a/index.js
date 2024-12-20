import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className,
    other,
    content
  } = input;
  _$.write(`<div${_$.classAttr(className)}${_$.attr("data-other", other)}>A `);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, content, {});
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/1")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(content)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-a/index.marko", _renderer);