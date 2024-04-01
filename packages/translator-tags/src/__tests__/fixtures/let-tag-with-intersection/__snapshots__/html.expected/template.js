import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = x + 1;
  const z = x + 2;
  const a = y + z;
  _write(`<button>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/2")} <!>${_escapeXML(z)}${_markResumeNode(_scope0_id, "#text/3")} <!>${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/4")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko");