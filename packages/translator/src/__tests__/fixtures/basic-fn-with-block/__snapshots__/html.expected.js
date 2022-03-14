import { markScopeOffset as _markScopeOffset, write as _write, on as _on, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-fn-with-block/template.marko", input => {
  const count = 0;

  _write(`${_markScopeOffset(0)}<button>${_markScopeOffset(1)}${_escapeXML(count)}</button>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);