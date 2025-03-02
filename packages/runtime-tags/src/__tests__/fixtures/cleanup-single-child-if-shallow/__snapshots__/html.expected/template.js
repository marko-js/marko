import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _child({
        write: _$.register(function (state) {
          el().innerHTML = state;
        }, "__tests__/template.marko_1/write", _scope1_id)
      });
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "6:2");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show,
    "#text/2(": _ifBranch,
    "#text/2!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});