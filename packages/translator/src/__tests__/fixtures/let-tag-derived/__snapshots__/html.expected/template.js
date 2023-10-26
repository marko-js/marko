import { markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    a
  } = input;
  const b = a * 2;
  _write(`<button>Increment</button>${_markResumeNode(_scope0_id, "#button/0")}${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/1")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/let-tag-derived/template.marko_0_b");
  _writeScope(_scope0_id, {
    "b": b
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/let-tag-derived/template.marko");