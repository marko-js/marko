import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (input.a + input.b) {
      const _scope1_id = _$.nextScopeId();
      _$.write("Hello");
      _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "1:2");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  let _ifScopeId2, _ifRenderer2;
  _$.resumeSingleNodeConditional(() => {
    if (input.a, input.b) {
      const _scope2_id = _$.nextScopeId();
      _$.write("World");
      _$.debug(_$.writeScope(_scope2_id, {}), "__tests__/template.marko", "5:2");
      _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
      _ifScopeId2 = _scope2_id;
    }
  }, _scope0_id, "#text/1");
  _$.write("<div>");
  let _ifScopeId3, _ifRenderer3;
  _$.resumeSingleNodeConditional(() => {
    if (input.x) {
      const _scope3_id = _$.nextScopeId();
      _$.write("A");
      _$.debug(_$.writeScope(_scope3_id, {}), "__tests__/template.marko", "10:4");
      _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_3_renderer");
      _ifScopeId3 = _scope3_id;
    } else if (input.y) {
      const _scope4_id = _$.nextScopeId();
      _$.write("B");
      _$.debug(_$.writeScope(_scope4_id, {}), "__tests__/template.marko", "13:4");
      _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_4_renderer");
      _ifScopeId3 = _scope4_id;
    } else {
      const _scope5_id = _$.nextScopeId();
      _$.write("C");
      _$.debug(_$.writeScope(_scope5_id, {}), "__tests__/template.marko", "16:4");
      _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_5_renderer");
      _ifScopeId3 = _scope5_id;
    }
  }, _scope0_id, "#text/2");
  _$.write("</div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "input_a": input.a,
    "input_b": input.b,
    "input_x": input.x,
    "input_y": input.y,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId),
    "#text/1(": _ifRenderer2,
    "#text/1!": _$.getScopeById(_ifScopeId2),
    "#text/2(": _ifRenderer3,
    "#text/2!": _$.getScopeById(_ifScopeId3)
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);