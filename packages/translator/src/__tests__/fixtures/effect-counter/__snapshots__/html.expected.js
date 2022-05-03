import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const clickCount = 0;

  _write(`<div>${_markHydrateNode(_scope, 0)}<button id=button>0</button></div>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/effect-counter/template.marko_0_clickCount");

  _writeHydrateScope(_scope, {
    1: clickCount
  });
};

export default _renderer;
export const render = _createRenderer(_renderer);