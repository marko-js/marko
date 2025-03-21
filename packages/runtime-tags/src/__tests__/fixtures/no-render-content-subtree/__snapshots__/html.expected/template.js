import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const output = _$.nodeRef(_scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      _child({
        foo: "bar",
        output: output
      });
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:1");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/1");
  _$.writeScope(_scope0_id, {
    "ConditionalRenderer:#text/1": _ifBranch,
    "ConditionalScope:#text/1": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0);
});