import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", _classLayout, {}, _$.register(/* @__PURE__ */_$.createRenderer(() => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count/subscriber");
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
    _$.debug(_$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    }), "__tests__/template.marko", "2:2");
    _$.resumeClosestBranch(_scope1_id);
  }), "__tests__/template.marko_1_renderer", _scope0_id));
  _s(_classLayout, "__tests__/components/class-layout.marko");
  _$.debug(_$.writeScope(_scope0_id, {
    "count": count,
    "#text/0!": _$.writeExistingScope(_dynamicScope),
    "#text/0(": _$.normalizeDynamicRenderer(_classLayout)
  }), "__tests__/template.marko", 0, {
    "count": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);