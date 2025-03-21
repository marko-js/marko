import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-b/index.marko", input => {
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
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/1": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/1": _$.dynamicTagId(content)
  }, "__tests__/tags/tag-b/index.marko", 0);
});