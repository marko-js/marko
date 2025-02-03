import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", input.foo, {});
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(input.foo)
  }), "__tests__/tags/hello/index.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello/index.marko", _renderer);