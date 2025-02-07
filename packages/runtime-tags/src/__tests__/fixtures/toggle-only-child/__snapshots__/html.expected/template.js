import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifRenderer;
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (input.value) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "2:4");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("</div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "input_value": input.value,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);