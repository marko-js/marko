import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const a = [0];
  const b = 1;

  _write(`${_markHydrateNode(0)}<button>${_markHydrateNode(1)}${_escapeXML(a.join(""))}</button>`);

  const _scope = _nextScopeId();

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_0");

  _writeHydrateScope(_scope, {});
};

export default _renderer;
export const render = _createRenderer(_renderer);