import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 0;
  _write(`<span>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</span><span>${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-set-in-effect/template.marko");