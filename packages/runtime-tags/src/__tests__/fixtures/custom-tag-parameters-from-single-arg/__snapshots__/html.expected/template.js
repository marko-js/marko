import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  _customTag({
    content: _$.register(/* @__PURE__ */_$.createRenderer(count => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div>Count: <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/0")}</div>`);
    }), "__tests__/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);