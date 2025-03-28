import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let show = false;
  _$.write("<table><tbody>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("<tr><td>Hi</td></tr>");
      return 0;
    }
  }, _scope0_id, "#tbody/0", 1, 1);
  _$.write(`</tbody></table><button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});