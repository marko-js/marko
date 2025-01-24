import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = false;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(_$.$global().x)}</span>`);
      _$.writeScope(_scope1_id, {});
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  let _ifScopeId2, _ifRenderer2;
  _$.resumeSingleNodeConditional(() => {
    if (!show) {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<span class=hidden>${_$.escapeXML(_$.$global().x)}</span>`);
      _$.writeScope(_scope2_id, {});
      _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
      _ifScopeId2 = _scope2_id;
    }
  }, _scope0_id, "#text/1");
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId),
    "#text/1(": _ifRenderer2,
    "#text/1!": _$.getScopeById(_ifScopeId2)
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);