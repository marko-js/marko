import { markHydrateNode as _markHydrateNode, attr as _attr, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const open = true;
  const list = [1, 2, 3];

  _write(`${_markHydrateNode(_scope, 0)}<ul${_attr("hidden", !open)}>`);

  for (const x of list) {
    const _scope = _nextScopeId();

    _write(`<li>${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</li>`);
  }

  _write(`</ul>${_markHydrateNode(_scope, 4)}<button id=toggle>Toggle</button>${_markHydrateNode(_scope, 5)}<button id=reverse>Reverse</button>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list");

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open");

  _writeHydrateScope(_scope, [,,,,,, open, list]);
};

export default _renderer;
export const render = _createRenderer(_renderer);