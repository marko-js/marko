import { markScopeOffset as _markScopeOffset, write as _write, escapeXML as _escapeXML, queue as _queue, read as _read, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko", input => {
  const id = 0;
  const items = [];

  _write(`<div>${_markScopeOffset(0)}`);

  for (const item of items) {
    _write(`${_markScopeOffset(0)}${_escapeXML(item)}`);
  }

  _write(`${_markScopeOffset(4)}<button id=add>Add</button>${_markScopeOffset(5)}<button id=remove>Remove</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);