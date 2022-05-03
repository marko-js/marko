import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const x = 1;
  const y = 1;

  _write(`${_markHydrateNode(_scope, 0)}<div>${_markHydrateNode(_scope, 1)}${_escapeXML(x)}</div>${_markHydrateNode(_scope, 2)}${_escapeXML(y)}`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y");

  _writeHydrateScope(_scope, {
    3: x,
    4: y
  });
};

export default _renderer;
export const render = _createRenderer(_renderer);