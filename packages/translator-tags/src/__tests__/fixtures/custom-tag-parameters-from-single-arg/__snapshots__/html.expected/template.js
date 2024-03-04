import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  _customTag._({
    renderBody(count) {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count: <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko");