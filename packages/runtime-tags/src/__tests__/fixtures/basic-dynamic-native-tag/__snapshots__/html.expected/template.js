import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    tagName
  } = input;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", tagName, {
    class: ["a", "b"]
  }, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write("Hello World");
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(tagName)
  }, "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);