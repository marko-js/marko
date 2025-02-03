import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const outer = true;
  const inner = true;
  const count = 0;
  _$.write(`<div><button id=outer></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  let _ifScopeId2, _ifRenderer2;
  _$.resumeConditional(() => {
    if (outer) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button id=inner></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      let _ifScopeId, _ifRenderer;
      _$.resumeSingleNodeConditional(() => {
        if (inner) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count/subscriber");
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count");
          _$.debug(_$.writeScope(_scope2_id, {
            "_": _$.ensureScopeWithId(_scope1_id)
          }), "__tests__/template.marko", "8:6");
          _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/1");
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_inner");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id),
        "#text/1(": _ifRenderer,
        "#text/1!": _$.getScopeById(_ifScopeId)
      }), "__tests__/template.marko", "6:4");
      _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId2 = _scope1_id;
    }
  }, _scope0_id, "#text/1");
  _$.write(" hello</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_outer");
  _$.debug(_$.writeScope(_scope0_id, {
    "outer": outer,
    "inner": inner,
    "count": count,
    "#text/1(": _ifRenderer2,
    "#text/1!": _$.getScopeById(_ifScopeId2)
  }), "__tests__/template.marko", 0, {
    "outer": "1:6",
    "inner": "2:6",
    "count": "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);