import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    show,
    value1,
    value2
  } = input;
  _$.write("<div>");
  let _ifScopeId3, _ifRenderer3;
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifRenderer;
      _$.resumeSingleNodeConditional(() => {
        if (value1) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode(_scope2_id, "#text/0")}</span>`);
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_value1/subscriber");
          _$.debug(_$.writeScope(_scope2_id, {
            "_": _$.ensureScopeWithId(_scope1_id)
          }), "__tests__/template.marko", "4:6");
          _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/0");
      let _ifScopeId2, _ifRenderer2;
      _$.resumeSingleNodeConditional(() => {
        if (value2) {
          const _scope3_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode(_scope3_id, "#text/0")}</span>`);
          _$.writeEffect(_scope3_id, "__tests__/template.marko_3_value2/subscriber");
          _$.debug(_$.writeScope(_scope3_id, {
            "_": _$.ensureScopeWithId(_scope1_id)
          }), "__tests__/template.marko", "5:6");
          _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_3_renderer");
          _ifScopeId2 = _scope3_id;
        }
      }, _scope1_id, "#text/1");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id),
        "#text/0(": _ifRenderer,
        "#text/0!": _$.getScopeById(_ifScopeId),
        "#text/1(": _ifRenderer2,
        "#text/1!": _$.getScopeById(_ifScopeId2)
      }), "__tests__/template.marko", "3:4");
      _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId3 = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("</div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "value1": value1,
    "value2": value2,
    "#text/0(": _ifRenderer3,
    "#text/0!": _$.getScopeById(_ifScopeId3)
  }), "__tests__/template.marko", 0, {
    "show": "1:9",
    "value1": "1:15",
    "value2": "1:23"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);