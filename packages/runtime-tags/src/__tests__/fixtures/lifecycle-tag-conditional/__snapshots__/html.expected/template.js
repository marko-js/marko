import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 0;
  let show = true;
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_x");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  _$.write(`<div id=ref></div><button id=increment>Increment</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    show
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    show: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});