import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 0;
  const show = true;
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_x");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.markResumeCleanup(_scope1_id);
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<div id=ref></div><button id=increment>Increment</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=toggle>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/2")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);