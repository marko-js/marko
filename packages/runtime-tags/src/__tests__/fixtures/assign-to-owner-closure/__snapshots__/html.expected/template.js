import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let hide = undefined;
  _$.resumeSingleNodeConditional(() => {
    if (!hide) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "2:2");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  _$.resumeClosestBranch(_scope0_id);
});