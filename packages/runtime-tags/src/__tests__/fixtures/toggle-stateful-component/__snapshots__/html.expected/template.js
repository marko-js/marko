import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifRenderer;
  const show = true;
  const onCount = _$.register(function (count) {
    show = count < 1;
  }, "__tests__/template.marko_0/onCount", _scope0_id);
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write("<div>");
      _counter({
        onCount: onCount
      });
      _$.write("</div>");
      _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "6:4");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("</div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "onCount": onCount,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "show": "1:6",
    "onCount": "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);