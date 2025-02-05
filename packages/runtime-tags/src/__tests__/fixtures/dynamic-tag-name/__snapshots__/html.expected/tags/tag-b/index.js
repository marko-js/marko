import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className,
    other,
    content
  } = input;
  _$.write(`<div${_$.classAttr(className)}${_$.attr("data-other", other)}>B `);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", content, {});
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.normalizeDynamicRenderer(content)
  }), "__tests__/tags/tag-b/index.marko", 0, {
    "className": "1:17",
    "other": "1:28",
    "content": "1:35"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-b/index.marko", _renderer);