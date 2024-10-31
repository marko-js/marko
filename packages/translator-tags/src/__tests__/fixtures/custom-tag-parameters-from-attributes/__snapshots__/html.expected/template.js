import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createRenderer as _createRenderer, register as _register, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  _customTag({
    name: "hello",
    renderBody: _register(/* @__PURE__ */_createRenderer(({
      count,
      name
    }) => {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count (<!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}): <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
    }), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko_1_renderer", _scope0_id)
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko");