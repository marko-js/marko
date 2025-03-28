import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
_s(_classLayout, "__tests__/components/class-layout.marko");
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _multiplier_closures = new Set();
  let multiplier = 1;
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/0", _classLayout, {}, _$.registerContent("__tests__/template.marko_1_renderer", (baseCount, message) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<h1>${_$.escapeXML(message)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1><button id=tags>${_$.escapeXML(multiplier)}${_$.markResumeNode(_scope1_id, "#text/2")} * <!>${_$.escapeXML(baseCount)}${_$.markResumeNode(_scope1_id, "#text/3")} = <!>${_$.escapeXML(multiplier * baseCount)}${_$.markResumeNode(_scope1_id, "#text/4")}</button>${_$.markResumeNode(_scope1_id, "#button/1")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_multiplier");
    _$.writeSubscribe(_multiplier_closures, _$.writeScope(_scope1_id, {
      baseCount,
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:multiplier": 0
    }, "__tests__/template.marko", "2:2", {
      baseCount: "2:15"
    }));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), 0, 1);
  _$.writeScope(_scope0_id, {
    multiplier,
    "ClosureScopes:multiplier": _multiplier_closures
  }, "__tests__/template.marko", 0, {
    multiplier: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});