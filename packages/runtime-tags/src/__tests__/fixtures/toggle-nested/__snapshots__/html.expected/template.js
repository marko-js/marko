import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    show,
    value1,
    value2
  } = input;
  _$.write("<div>");
  let _ifScopeId3, _ifRenderer3;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write(_$.markResumeScopeStart(_scope1_id));
    let _ifScopeId, _ifRenderer;
    if (value1) {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode(_scope2_id, "#text/0")}</span>`);
      _$.writeEffect(_scope2_id, "__tests__/template.marko_2_value1/subscriber");
      _$.writeScope(_scope2_id, {
        "_": _$.ensureScopeWithId(_scope1_id)
      });
      _$.markResumeCleanup(_scope2_id);
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _$.write(_$.markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId));
    let _ifScopeId2, _ifRenderer2;
    if (value2) {
      const _scope3_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode(_scope3_id, "#text/0")}</span>`);
      _$.writeEffect(_scope3_id, "__tests__/template.marko_3_value2/subscriber");
      _$.writeScope(_scope3_id, {
        "_": _$.ensureScopeWithId(_scope1_id)
      });
      _$.markResumeCleanup(_scope3_id);
      _$.register(_ifRenderer2 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_3_renderer");
      _ifScopeId2 = _scope3_id;
    }
    _$.write(_$.markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId2));
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id),
      "#text/0(": _ifRenderer,
      "#text/0!": _$.getScopeById(_ifScopeId),
      "#text/1(": _ifRenderer2,
      "#text/1!": _$.getScopeById(_ifScopeId2)
    });
    _$.markResumeCleanup(_scope1_id);
    _$.register(_ifRenderer3 = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId3 = _scope1_id;
  }
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "value1": value1,
    "value2": value2,
    "#text/0(": _ifRenderer3,
    "#text/0!": _$.getScopeById(_ifScopeId3)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);