import { writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  el
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el");
  _writeScope(_scope0_id, {
    "el": el
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");