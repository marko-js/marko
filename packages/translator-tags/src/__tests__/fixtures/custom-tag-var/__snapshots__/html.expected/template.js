import _child from "./components/child.marko";
import { peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _childScope = _peekNextScope();
  const data = _child._({}, _register(() => {}, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko_0_data", _scope0_id));
  _write(`<div>${_escapeXML(data)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var/template.marko");