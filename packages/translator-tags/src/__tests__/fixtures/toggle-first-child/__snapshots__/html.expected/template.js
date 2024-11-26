import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  if (value) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-first-child/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<span></span><span></span></div>`);
  _$.writeScope(_scope0_id, {
    "value": value,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/toggle-first-child/template.marko", _renderer);