import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const message = {
    text: "hi"
  };
  const show = true;

  _write(`${_markHydrateNode(0)}<button>hide</button>${_markHydrateNode(1)}`);

  if (show) _write(`${_markHydrateNode(0)}${_escapeXML(message.text)}`);

  const _scope = _nextScopeId();

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko_0_0");

  _writeHydrateScope(_scope, {});
};

export default _renderer;
export const render = _createRenderer(_renderer);