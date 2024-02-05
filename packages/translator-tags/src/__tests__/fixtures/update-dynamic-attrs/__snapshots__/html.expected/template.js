import { attrs as _attrs, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  _write(`<div${_attrs(input.value)}></div>${_markResumeNode(_scope0_id, "#div/0")}<div${_attrs({
    a: a,
    ...input.value
  })}></div>${_markResumeNode(_scope0_id, "#div/1")}<div${_attrs({
    ...input.value,
    a: a
  })}></div>${_markResumeNode(_scope0_id, "#div/2")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");