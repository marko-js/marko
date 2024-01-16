import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  value
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div>Child 1 has <!>${_escapeXML(value)}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child1.marko");