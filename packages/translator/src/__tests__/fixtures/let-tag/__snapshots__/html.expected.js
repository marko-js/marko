import { markScopeOffset as _markScopeOffset, write as _write, read as _read, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/let-tag/template.marko", input => {
  const x = 1;
  const y = 1;

  _write(`${_markScopeOffset(0)}<div>${_markScopeOffset(1)}${_escapeXML(x)}</div>${_markScopeOffset(2)}${_escapeXML(y)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);