import "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const multiplier = 1;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_dynamicScope, _classLayout, {}, _$.register(/* @__PURE__ */_$.createRenderer((baseCount, message) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<h1>${_$.escapeXML(message)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1><button id=tags>${_$.escapeXML(multiplier)}${_$.markResumeNode(_scope1_id, "#text/2")} * <!>${_$.escapeXML(baseCount)}${_$.markResumeNode(_scope1_id, "#text/3")} = <!>${_$.escapeXML(multiplier * baseCount)}${_$.markResumeNode(_scope1_id, "#text/4")}</button>${_$.markResumeNode(_scope1_id, "#button/1")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_multiplier/subscriber");
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_multiplier");
    _$.writeScope(_scope1_id, {
      "baseCount": baseCount,
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _s(_classLayout, "__tests__/components/class-layout.marko");
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/0"));
  _$.writeScope(_scope0_id, {
    "multiplier": multiplier,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(_classLayout)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);