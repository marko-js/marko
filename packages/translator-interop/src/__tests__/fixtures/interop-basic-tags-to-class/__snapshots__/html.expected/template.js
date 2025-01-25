import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classCounter from "./components/class-counter.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, _classCounter, {
    count: count
  });
  _s(_classCounter, "__tests__/components/class-counter.marko");
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/2"));
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(_classCounter)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);