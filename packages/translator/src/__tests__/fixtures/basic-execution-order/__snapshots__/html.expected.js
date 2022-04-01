import { markHydrateNode as _markHydrateNode, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko", input => {
  const message = {
    text: "hi"
  };
  const show = true;

  _write(`${_markHydrateNode(0)}<button>hide</button>${_markHydrateNode(1)}`);

  if (show) _write(`${_markHydrateNode(0)}${_escapeXML(message.text)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);