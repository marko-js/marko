import { nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  el
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el");
  _writeHydrateScope(_scope0_, {
    "el": el
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);