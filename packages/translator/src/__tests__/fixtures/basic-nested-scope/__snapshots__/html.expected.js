import { markScopeOffset as _markScopeOffset, write as _write, read as _read, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope/template.marko", input => {
  const clickCount = 0;

  _write(`<div>${_markScopeOffset(0)}`);

  if (clickCount < 3) _write(`${_markScopeOffset(0)}<button>${_markScopeOffset(1)}${_escapeXML(clickCount)}</button>`);

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);