import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  const d = {};
  const e = 0;
  const f = [];
  _write(`<button><pre>a    1    <!>${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/1")}</pre><pre>b    2    <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/2")}</pre><pre>d  {d:4}  <!>${_escapeXML(JSON.stringify(d))}${_markResumeNode(_scope0_id, "#text/3")}</pre><pre>e    7    <!>${_escapeXML(e)}${_markResumeNode(_scope0_id, "#text/4")}</pre><pre>f   [9]   <!>${_escapeXML(JSON.stringify(f))}${_markResumeNode(_scope0_id, "#text/5")}</pre></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko");