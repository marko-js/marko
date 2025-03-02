import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", false || Child, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count/subscriber");
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "4:4");
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id));
  _$.writeScope(_scope0_id, {
    count,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.dynamicTagId(false || Child)
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});