import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let a = 0;
  let b = 0;
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a + b)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "1:6",
    b: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});