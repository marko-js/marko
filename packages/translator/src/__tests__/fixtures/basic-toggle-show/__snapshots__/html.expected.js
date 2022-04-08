import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const show = true;

  _write(`<div>${_markHydrateNode(_scope, 0)}`);

  if (show) {
    const _scope = _nextScopeId();

    _write("Hello!");
  }

  _write(`${_markHydrateNode(_scope, 4)}<button>Toggle</button></div>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show");

  _writeHydrateScope(_scope, [,,,,, show]);
};

export default _renderer;
export const render = _createRenderer(_renderer);