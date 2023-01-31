import { nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _return = 1;
  _writeHydrateScope(_scope0_id, {
    "/": _tagVar
  }, _scope0_);
  return _return;
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-var/components/child/index.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);