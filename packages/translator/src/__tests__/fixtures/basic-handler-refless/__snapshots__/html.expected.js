import { markScopeOffset as _markScopeOffset, write as _write, read as _read, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko", input => {
  const data = 0;

  _write(`${_markScopeOffset(0)}<button>${_markScopeOffset(1)}${_escapeXML(data)}</button>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);