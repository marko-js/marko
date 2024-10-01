import { write as _write, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, escapeXML as _escapeXML, markResumeNode as _markResumeNode, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write("<section>");
  const _childScope = _peekNextScope();
  _child._({});
  _write(`</section><div>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/walk-over-child/template.marko");