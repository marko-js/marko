import { pushContext as _pushContext, nextScopeId as _nextScopeId, popContext as _popContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 123;
  _pushContext("packages/translator-tags/src/__tests__/fixtures/context-tag-reactive/template.marko", x);
  const _scope1_id = _nextScopeId();
  _child._({});
  _popContext();
  _write(`<button id=increment>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/context-tag-reactive/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/context-tag-reactive/template.marko");