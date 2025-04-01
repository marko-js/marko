import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let show = false;
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(_$.$global().x)}</span>`);
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  _$.resumeSingleNodeConditional(() => {
    if (!show) {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<span class=hidden>${_$.escapeXML(_$.$global().x)}</span>`);
      return 0;
    }
  }, _scope0_id, "#text/1", 1);
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});