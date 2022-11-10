import { nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-effect-no-deps/template.marko_0");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);