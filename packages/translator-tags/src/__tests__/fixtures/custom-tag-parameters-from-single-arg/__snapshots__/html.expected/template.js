import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  _customTag._({
    renderBody: _register(/* @__PURE__ */_createRenderer(count => {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count: <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko_1_renderer")
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko");