import * as _$ from "@marko/runtime-tags/debug/html";
import _layout from "./tags/layout.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  const _childScope = _$.peekNextScope();
  _layout({
    content: _$.register(/* @__PURE__ */_$.createRenderer(() => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<h1>Hello <!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_name/subscriber");
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "2:2");
      _$.resumeClosestBranch(_scope1_id);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.debug(_$.writeScope(_scope0_id, {
    "name": name,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "name": "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);