import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  const x = 0;
  _write(`<div id=ref></div>${_markHydrateNode(_scope, 0)}<button id=increment>Increment</button>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x");
  _writeHydrateScope(_scope, {
    1: x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);