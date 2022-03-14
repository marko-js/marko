import { markScopeOffset as _markScopeOffset, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko", input => {
  const unused_1 = 123;
  const unused_2 = 456;
  const clickCount = 0;

  _write(`<div>${_markScopeOffset(0)}<button>${_markScopeOffset(1)}${_escapeXML(clickCount)}</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);