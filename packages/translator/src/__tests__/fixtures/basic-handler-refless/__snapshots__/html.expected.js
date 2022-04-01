import { markHydrateNode as _markHydrateNode, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko", input => {
  const data = 0;

  _write(`${_markHydrateNode(0)}<button>${_markHydrateNode(1)}${_escapeXML(data)}</button>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);