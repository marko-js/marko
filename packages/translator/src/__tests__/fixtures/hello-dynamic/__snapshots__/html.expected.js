import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko", input => {
  _write(`Hello ${_markScopeOffset(0)}${_escapeXML(name)}! Hello ${_markScopeOffset(1)}${_toString(name)}! Hello ${_markScopeOffset(2)}${_toString(missing)}!`);
});

export default _renderer;
export const render = _createRenderer(_renderer);