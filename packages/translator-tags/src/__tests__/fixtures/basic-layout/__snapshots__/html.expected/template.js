import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _layout from "./components/layout.marko";
const _renderer = /* @__PURE__ */_createRenderer(({
  name
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekSerializedScope();
  _layout._({
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}</h1>`);
    }
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");