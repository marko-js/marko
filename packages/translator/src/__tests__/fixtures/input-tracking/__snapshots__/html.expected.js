import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/input-tracking/template.marko", input => {
  const {
    a,
    b
  } = input;

  _write(`${_markScopeOffset(0)}${_escapeXML(a)} ${_markScopeOffset(1)}${_escapeXML(b)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);