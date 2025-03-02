import _displayIntersection from "./tags/display-intersection.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _childScope = _$.peekNextScope();
  _displayIntersection({
    value: count
  });
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});