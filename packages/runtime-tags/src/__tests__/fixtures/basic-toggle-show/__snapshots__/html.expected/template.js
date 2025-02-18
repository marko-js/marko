import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const show = true;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("Hello!");
      _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "3:4");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    show: show,
    "#text/0(": _ifBranch,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    show: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);