import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, peekSerializedScope as _peekSerializedScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _layout from "./components/layout.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    name
  } = input;
  const _childScope = _peekSerializedScope();
  _layout._({
    renderBody: /* @__PURE__ */_createRenderer(() => {
      const _scope1_id = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}</h1>`);
      _writeScope(_scope1_id, {
        "_": _serializedScope(_scope0_id)
      });
    })
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");