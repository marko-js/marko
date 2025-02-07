import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifRenderer;
  const show = true;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("Hello!");
      _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "3:4");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.debug(_$.writeScope(_scope0_id, {
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "show": "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);