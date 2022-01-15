import { write as _write, markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, queue as _queue, read as _read, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko", input => {
  const id = 0;
  const items = [];

  _write("<div>");

  for (const item of items) {
    _write(`${_markScopeOffset(0)}${_escapeXML(item)}`);
  }

  _write(`${_markScopeOffset(0)}<button>Add</button>${_markScopeOffset(1)}<button>Remove</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);