import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _childScope = _$.peekNextScope();
  _customTag({
    name: "hello",
    renderBody: _$.register(/* @__PURE__ */_$.createRenderer(({
      count,
      name
    }) => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<div>Count (<!>${_$.escapeXML(name)}${_$.markResumeNode(_scope1_id, "#text/0")}): <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}</div>`);
    }), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko_1_renderer", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko");