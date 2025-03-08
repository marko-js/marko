import _myLet from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _myTag from "./tags/my-tag.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _count_closures = new Set();
  const _childScope = _$.peekNextScope();
  const count = _myLet({
    value: 0
  });
  _$.setTagVar(_scope0_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_0_count/var");
  _myTag({
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
      _$.writeSubscribe(_count_closures, _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "count(": 0
      }, "__tests__/template.marko", "2:1"));
      _$.resumeClosestBranch(_scope1_id);
    })
  });
  _$.writeScope(_scope0_id, {
    count,
    "#childScope/0": _$.writeExistingScope(_childScope),
    "count!": _count_closures
  }, "__tests__/template.marko", 0, {
    count: "1:8"
  });
});