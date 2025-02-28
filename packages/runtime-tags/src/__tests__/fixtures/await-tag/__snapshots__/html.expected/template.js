import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write("<div>");
  _$.fork(Promise.resolve("a"), value => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count/subscriber");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "5:4");
    _$.resumeClosestBranch(_scope1_id);
  });
  _$.fork(resolveAfter("b", 2), value => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}`);
    _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count/subscriber");
    _$.writeScope(_scope2_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "9:4");
    _$.resumeClosestBranch(_scope2_id);
  });
  _$.fork(resolveAfter("c", 1), value => {
    const _scope3_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}`);
    _$.writeEffect(_scope3_id, "__tests__/template.marko_3_count/subscriber");
    _$.writeScope(_scope3_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "13:4");
    _$.resumeClosestBranch(_scope3_id);
  });
  _$.write(`<button>Inc</button>${_$.markResumeNode(_scope0_id, "#button/0")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count/1": count
  }, "__tests__/template.marko", 0, {
    "count/1": "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);