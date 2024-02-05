import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 1;
  _write(`<button>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag/template.marko_0_x_y");
  _writeScope(_scope0_id, {
    "x": x,
    "y": y
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/let-tag/template.marko");