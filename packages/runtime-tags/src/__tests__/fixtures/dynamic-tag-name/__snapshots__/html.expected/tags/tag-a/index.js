import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-a/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className,
    other,
    content
  } = input;
  _$.write(`<div${_$.classAttr(className)}${_$.attr("data-other", other)}>A `);
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/1", content, {}, 0, 0, 1);
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});