import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const x = 0;
  const show = true;
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_x");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:2");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write(`<div id=ref></div><button id=increment>Increment</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x/3": x,
    "show/4": show,
    "#text/0(": _ifBranch,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    "x/3": "1:6",
    "show/4": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);