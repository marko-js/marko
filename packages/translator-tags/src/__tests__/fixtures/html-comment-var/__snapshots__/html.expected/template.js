import { write as _write, peekSerializedScope as _peekSerializedScope, createRenderer as _createRenderer, register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _parentEl from "./components/parent-el.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _childScope = _peekSerializedScope();
  const divName = _parentEl._({}, _register( /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_divName", _scope0_id));
  _write(`${_escapeXML(divName)}${_markResumeNode(_scope0_id, "#text/1")}</div><span>`);
  const _childScope2 = _peekSerializedScope();
  const spanName = _parentEl._({}, _register( /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_spanName", _scope0_id));
  _write(`${_escapeXML(spanName)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope,
    "#childScope/2": _childScope2
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko");