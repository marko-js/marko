import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _classCounter from "./components/class-counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, _classCounter, {
    onCount: _$.register(function (newCount) {
      count = newCount;
    }, "__tests__/template.marko_0/onCount", _scope0_id)
  });
  _s(_classCounter, "__tests__/components/class-counter.marko");
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<div id=tags-api>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(_classCounter)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);