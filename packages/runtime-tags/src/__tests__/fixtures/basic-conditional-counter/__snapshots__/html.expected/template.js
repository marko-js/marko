import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = true;
  const count = 0;
  _$.write(`<button class=inc></button>${_$.markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "5:2");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.debug(_$.writeScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2(": _ifRenderer,
    "#text/2!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "show": "1:6",
    "count": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);