import * as _$ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _name__closures = new Set();
  const {
    name
  } = input;
  _layout({
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<h1>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _$.writeSubscribe(_name__closures, _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "name(": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch(_scope1_id);
    })
  });
  _$.writeScope(_scope0_id, {
    name,
    "name!": _name__closures
  }, "__tests__/template.marko", 0, {
    name: "1:10"
  });
});