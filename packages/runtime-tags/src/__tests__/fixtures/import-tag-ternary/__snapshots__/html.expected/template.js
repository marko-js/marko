import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, x === 1 ? baz : foo, {});
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/0"));
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(x === 1 ? baz : foo)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);