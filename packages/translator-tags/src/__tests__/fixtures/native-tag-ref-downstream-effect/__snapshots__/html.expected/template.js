import { ensureScopeWithId as _ensureScopeWithId, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markResumeNode(_scope0_id, "#div/0")}`);
  if (true) {
    const _scope1_id = _nextScopeId();
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
  }
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko");