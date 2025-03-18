import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _count_closures = new Set();
  let count = 0;
  _$.write("<div>");
  _$.fork(Promise.resolve("a"), value => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}`);
    _$.writeSubscribe(_count_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "count(": 0
    }, "__tests__/template.marko", "5:4"));
    _$.resumeClosestBranch(_scope1_id);
  });
  _$.fork(resolveAfter("b", 2), value => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}`);
    _$.writeSubscribe(_count_closures, _$.writeScope(_scope2_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "count(": 1
    }, "__tests__/template.marko", "9:4"));
    _$.resumeClosestBranch(_scope2_id);
  });
  _$.fork(resolveAfter("c", 1), value => {
    const _scope3_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}`);
    _$.writeSubscribe(_count_closures, _$.writeScope(_scope3_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "count(": 2
    }, "__tests__/template.marko", "13:4"));
    _$.resumeClosestBranch(_scope3_id);
  });
  _$.write(`<button>Inc</button>${_$.markResumeNode(_scope0_id, "#button/3")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    count,
    "count!": _count_closures
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});