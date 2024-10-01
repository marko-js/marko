import { markResumeControlFlow as _markResumeControlFlow, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div>child</div>${_markResumeControlFlow(_scope0_id)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-effect-signal/components/child.marko_0_input");
  _writeScope(_scope0_id, {
    "input": input
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-effect-signal/components/child.marko");