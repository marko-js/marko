import { markHydrateNode as _markHydrateNode, write as _write, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/effect-counter/template.marko", input => {
  const clickCount = 0;

  _write(`<div>${_markHydrateNode(0)}<button id=button>0</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);