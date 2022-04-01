import { markHydrateNode as _markHydrateNode, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/let-tag/template.marko", input => {
  const x = 1;
  const y = 1;

  _write(`${_markHydrateNode(0)}<div>${_markHydrateNode(1)}${_escapeXML(x)}</div>${_markHydrateNode(2)}${_escapeXML(y)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);