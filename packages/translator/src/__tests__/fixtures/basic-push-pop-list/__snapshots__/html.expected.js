import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const id = 0;
  const items = [];

  _write(`<div>${_markHydrateNode(_scope, 0)}`);

  for (const item of items) {
    const _scope = _nextScopeId();

    _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(item)}`);

    _maybeFlush();
  }

  _write(`${_markHydrateNode(_scope, 4)}<button id=add>Add</button>${_markHydrateNode(_scope, 5)}<button id=remove>Remove</button></div>`);

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items");

  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items");

  _writeHydrateScope(_scope, [,,,,,, id, items]);
};

export default _renderer;
export const render = _createRenderer(_renderer);