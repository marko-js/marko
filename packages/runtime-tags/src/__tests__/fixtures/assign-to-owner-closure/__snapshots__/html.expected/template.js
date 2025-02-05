import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const hide = undefined;
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (!hide) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "2:2");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "hide": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);