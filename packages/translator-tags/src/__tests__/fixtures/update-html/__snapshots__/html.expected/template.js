import { toString as _toString, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  value
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<em>Testing</em> <!>${_toString(value)}${_markResumeNode(_scope0_id, "#text/0")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/update-html/template.marko");