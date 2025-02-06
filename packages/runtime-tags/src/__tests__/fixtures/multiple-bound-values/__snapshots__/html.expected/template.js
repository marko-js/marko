import _counters from "./tags/2counters.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count1 = 0;
  const count2 = 0;
  const _childScope = _$.peekNextScope();
  _counters({
    count1: count1,
    count1Change: _$.register(_new_count1 => {
      count1 = _new_count1;
    }, "__tests__/template.marko_0/count1Change", _scope0_id),
    count2: count2,
    count2Change: _$.register(_new_count2 => {
      count2 = _new_count2;
    }, "__tests__/template.marko_0/count2Change", _scope0_id)
  });
  _$.write(`<div>${_$.escapeXML(count1)}${_$.markResumeNode(_scope0_id, "#text/1")} <!>${_$.escapeXML(count2)}${_$.markResumeNode(_scope0_id, "#text/2")}</div>`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "count1": "1:6",
    "count2": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);