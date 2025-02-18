import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _child({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count/subscriber");
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_count");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "2:2");
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    count: count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);