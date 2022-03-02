import { markScopeOffset as _markScopeOffset, write as _write, read as _read, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-execution-order/template.marko", input => {
  const message = {
    text: "hi"
  };
  const show = true;

  _write(`${_markScopeOffset(0)}<button>hide</button>${_markScopeOffset(1)}`);

  if (show) _write(`${_markScopeOffset(0)}${_escapeXML(message.text)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);