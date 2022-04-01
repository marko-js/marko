import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko", input => {
  const id = 0;
  const items = [];

  _write(`<div>${_markHydrateNode(0)}`);

  for (const item of items) {
    _write(`${_markHydrateNode(0)}${_escapeXML(item)}`);
  }

  _write(`${_markHydrateNode(4)}<button id=add>Add</button>${_markHydrateNode(5)}<button id=remove>Remove</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);