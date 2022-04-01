import { markHydrateNode as _markHydrateNode, write as _write, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko", input => {
  const show = true;

  _write(`<div>${_markHydrateNode(0)}`);

  if (show) _write("Hello!");

  _write(`${_markHydrateNode(4)}<button>Toggle</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);