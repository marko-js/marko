import { attrs as _attrs, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<input${_attrs({
    type: "checkbox",
    ...input
  }, "#input/0", _scope0_id, "input")}>${_markResumeNode(_scope0_id, "#input/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input");
  _writeScope(_scope0_id, {
    "input": input
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko");