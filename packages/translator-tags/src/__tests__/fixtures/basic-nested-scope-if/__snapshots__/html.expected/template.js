import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  if (clickCount < 3) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_clickCount");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  } else {
    const _scope2_id = _$.nextScopeId();
    _$.write(`<span>The button was clicked <!>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope2_id, "#text/0")} times.</span>`);
    _$.writeScope(_scope2_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}</div>`);
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);