const a = 1;
import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _c_closures = new Set();
  const b = 2;
  let c = 3;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _customTag({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode(_scope1_id, "#text/2")}`);
      _$.writeSubscribe(_c_closures, _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "ClosureSignalIndex:c": 0
      }, "__tests__/template.marko", "6:2"));
      _$.resumeClosestBranch(_scope1_id);
    })
  });
  _$.write("<div>");
  if (Math.random()) {
    const _scope2_id = _$.nextScopeId();
    if (Math.random()) {
      const _scope3_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode(_scope3_id, "#text/2")}`);
      _$.writeSubscribe(_c_closures, _$.writeScope(_scope3_id, {
        _: _$.ensureScopeWithId(_scope2_id),
        "ClosureSignalIndex:c": 1
      }, "__tests__/template.marko", "11:6"));
    }
    _$.writeScope(_scope2_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "10:4");
  }
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    b,
    c,
    "ClosureScopes:c": _c_closures
  }, "__tests__/template.marko", 0, {
    b: "2:7",
    c: "3:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});