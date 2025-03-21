import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  let show = false;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("hi");
      _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "3:2");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/1");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show,
    "ConditionalRenderer:#text/1": _ifBranch,
    "ConditionalScope:#text/1": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});