import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = false;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<span>${_$.escapeXML(_$.$global().x)}</span>`);
    _$.writeScope(_scope1_id, {});
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}`);
  let _ifScopeId2, _ifRenderer2;
  if (!show) {
    const _scope2_id = _$.nextScopeId();
    _$.write(`<span class=hidden>${_$.escapeXML(_$.$global().x)}</span>`);
    _$.writeScope(_scope2_id, {});
    _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_2_renderer");
    _ifScopeId2 = _scope2_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/1", _ifScopeId2)}<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId),
    "#text/1(": _ifRenderer2,
    "#text/1!": _$.getScopeById(_ifScopeId2)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko", _renderer);