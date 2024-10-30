import { attrs as _attrs, markResumeNode as _markResumeNode, attr as _attr, partialAttrs as _partialAttrs, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  _write(`<div${_attrs(input.value, "#div/0", _scope0_id)}></div>${_markResumeNode(_scope0_id, "#div/0")}<div${_attrs({
    a: a,
    ...input.value
  }, "#div/1", _scope0_id)}></div>${_markResumeNode(_scope0_id, "#div/1")}<div${_attr("a", a)}${_partialAttrs(input.value, {
    a: 1
  }, "#div/2", _scope0_id)}></div>${_markResumeNode(_scope0_id, "#div/2")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input_a");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko_0_input");
  _writeScope(_scope0_id, {
    "input": input,
    "a": a
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/update-dynamic-attrs/template.marko");