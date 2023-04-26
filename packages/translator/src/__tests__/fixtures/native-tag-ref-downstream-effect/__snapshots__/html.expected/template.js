import { markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  if (true) {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1");
  }
}, "packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);