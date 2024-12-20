import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _helloInternal from "./components/hello-internal.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, _helloInternal, {});
  _s(_helloInternal, "__tests__/tags/components/hello-internal.marko");
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/0"));
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(_helloInternal)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello.marko", _renderer);