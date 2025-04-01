import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
_s(_classLayout, "__tests__/components/class-layout.marko");
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _count_closures = new Set();
  let count = 0;
  _$.dynamicTag(_scope0_id, "#text/0", _classLayout, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
    _$.writeSubscribe(_count_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "2:2"));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), 0, 1);
  _$.writeScope(_scope0_id, {
    count,
    "ClosureScopes:count": _count_closures
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});