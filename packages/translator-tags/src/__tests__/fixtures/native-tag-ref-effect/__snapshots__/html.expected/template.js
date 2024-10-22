import { nodeRef as _nodeRef, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const el = _nodeRef();
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko_0");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko");