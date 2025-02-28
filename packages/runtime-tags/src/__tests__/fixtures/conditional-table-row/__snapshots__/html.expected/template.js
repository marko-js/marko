import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const show = false;
  _$.write("<table><tbody>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("<tr><td>Hi</td></tr>");
      _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "4:6");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#tbody/0", 1);
  _$.write(`</tbody></table><button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show/2": show,
    "#tbody/0(": _ifBranch,
    "#tbody/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    "show/2": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);