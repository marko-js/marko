const a = 1;
import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const b = 2;
  const c = 3;
  _$.write(`<button></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _childScope = _$.peekNextScope();
  _customTag({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode(_scope1_id, "#text/2")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_c/subscriber");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "6:2");
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.write("<div>");
  if (Math.random()) {
    const _scope2_id = _$.nextScopeId();
    if (Math.random()) {
      const _scope3_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a)} ${_$.escapeXML(b)} <!>${_$.escapeXML(c)}${_$.markResumeNode(_scope3_id, "#text/2")}`);
      _$.writeEffect(_scope3_id, "__tests__/template.marko_3_c/subscriber");
      _$.debug(_$.writeScope(_scope3_id, {
        "_": _$.ensureScopeWithId(_scope2_id)
      }), "__tests__/template.marko", "11:6");
    }
    _$.debug(_$.writeScope(_scope2_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    }), "__tests__/template.marko", "10:4");
  }
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.debug(_$.writeScope(_scope0_id, {
    "b": b,
    "c": c,
    "#childScope/1": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "b": "2:7",
    "c": "3:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);