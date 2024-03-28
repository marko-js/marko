import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  _customTag._({
    renderBody: /* @__PURE__ */_createRenderer((count, count2) => {
      const _scope1_id = _nextScopeId();
      _write(`<div>Counts: <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")},<!>${_escapeXML(count2)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
    })
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/template.marko");