import * as _$ from "@marko/runtime-tags/debug/html";
import _classCounter from "./components/class-counter.marko";
import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, _classCounter, {
    onCount: _$.register(function (newCount) {
      count = newCount;
    }, "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko_0/onCount", _scope0_id)
  });
  _s(_classCounter, "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/components/class-counter.marko");
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/0")}<div id=tags-api>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(_classCounter)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko", _renderer);