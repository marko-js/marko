import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, createRenderer as _createRenderer, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const MyTag = /* @__PURE__ */_createRenderer(input => _write(`Hello <!>${_escapeXML(input.name)}${_markResumeNode(_scope1_id, "#text/0")}`));
  MyTag({
    name: "World"
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/tag-tag/template.marko");