import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", input.content, {});
  const _dynamicScope2 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/1", input.content, {});
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(input.content),
    "#text/1!": _$.writeExistingScope(_dynamicScope2),
    "#text/1(": _$.normalizeDynamicRenderer(input.content)
  }, "__tests__/tags/child.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);