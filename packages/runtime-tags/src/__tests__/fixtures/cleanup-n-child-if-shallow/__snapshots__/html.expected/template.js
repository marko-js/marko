import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifRenderer;
  const show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div></div>${_$.markResumeNode(_scope0_id, "#div/1")}`);
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _child({
        write: _$.register(function (state) {
          el().innerHTML = state;
        }, "__tests__/template.marko_1/write", _scope1_id)
      });
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "6:2");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.debug(_$.writeScope(_scope0_id, {
    "show": show,
    "#text/2(": _ifRenderer,
    "#text/2!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "show": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);