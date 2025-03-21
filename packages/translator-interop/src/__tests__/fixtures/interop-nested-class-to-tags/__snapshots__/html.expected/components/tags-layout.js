import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/2", input.content, {});
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/components/tags-layout.marko_0_count");
  _$.writeScope(_scope0_id, {
    count,
    "ConditionalScope:#text/2": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/2": _$.dynamicTagId(input.content)
  }, "__tests__/components/tags-layout.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});