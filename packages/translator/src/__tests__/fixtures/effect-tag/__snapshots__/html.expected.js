import { write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const x = 1;

  _write("<div id=ref>0</div>");

  const _scope = _nextScopeId();

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/effect-tag/template.marko_0_0");

  _writeHydrateScope(_scope, {});
};

export default _renderer;
export const render = _createRenderer(_renderer);