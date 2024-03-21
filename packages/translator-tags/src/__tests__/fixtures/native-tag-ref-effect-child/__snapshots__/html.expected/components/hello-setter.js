import { writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    el
  } = input;
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el");
  _writeScope(_scope0_id, {
    "el": el
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");