import { styleAttr as _styleAttr, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    style
  } = input;
  _write(`<div${_styleAttr(style)}></div>${_markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/attr-style/components/custom-tag.marko");