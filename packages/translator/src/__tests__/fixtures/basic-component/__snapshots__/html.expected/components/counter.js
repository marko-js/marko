import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const clickCount = 0;

  _write(`${_markHydrateNode(0)}<button>${_markHydrateNode(1)}${_escapeXML(clickCount)}</button>`);

  const _scope = _nextScopeId();

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_0");

  _writeHydrateScope(_scope, {});
};

export default _renderer;
export const render = _createRenderer(_renderer);