import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let tagName = "div";
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", tagName, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _counter({});
  }, _scope0_id));
  _$.write(`<button id=changeTag></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope(_scope0_id, {
    tagName,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(tagName)
  }, "__tests__/template.marko", 0, {
    tagName: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});