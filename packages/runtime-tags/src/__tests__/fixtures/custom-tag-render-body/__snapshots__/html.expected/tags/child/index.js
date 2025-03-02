import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child/index.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    name,
    content
  } = input;
  _$.write(`<!>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", content, {});
  _$.writeScope(_scope0_id, {
    "#text/1!": _$.writeExistingScope(_dynamicScope),
    "#text/1(": _$.dynamicTagId(content)
  }, "__tests__/tags/child/index.marko", 0);
});