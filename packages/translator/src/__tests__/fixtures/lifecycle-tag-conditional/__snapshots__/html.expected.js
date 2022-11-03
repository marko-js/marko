import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const x = 0;
  const show = true;

  _write(`${_markHydrateNode(_scope, 0)}`);

  if (show) {
    const _scope = _nextScopeId();

    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x");

    _writeHydrateScope(_scope, {
      8: x
    });
  }

  _write(`<div id=ref></div>${_markHydrateNode(_scope, 6)}<button id=increment>Increment</button>${_markHydrateNode(_scope, 7)}<button id=toggle>Toggle</button>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show");

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x");

  _writeHydrateScope(_scope, {
    8: x,
    9: show
  });
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);