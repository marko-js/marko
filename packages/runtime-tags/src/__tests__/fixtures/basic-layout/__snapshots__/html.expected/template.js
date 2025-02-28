import * as _$ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  _layout({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<h1>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_name/subscriber");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "2:2");
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    name
  }, "__tests__/template.marko", 0, {
    name: "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);