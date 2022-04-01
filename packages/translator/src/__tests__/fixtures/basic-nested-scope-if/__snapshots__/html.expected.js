import { markHydrateNode as _markHydrateNode, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko", input => {
  const clickCount = 0;

  _write(`<div>${_markHydrateNode(0)}`);

  if (clickCount < 3) _write(`${_markHydrateNode(0)}<button>${_markHydrateNode(1)}${_escapeXML(clickCount)}</button>`);

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);