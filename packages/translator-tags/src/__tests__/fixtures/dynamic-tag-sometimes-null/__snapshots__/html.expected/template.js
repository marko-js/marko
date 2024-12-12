import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = null;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, x, {}, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Body Content");
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<button></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    "x": x,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(x)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);