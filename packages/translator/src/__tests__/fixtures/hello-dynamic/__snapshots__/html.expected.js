import { escapeXML as _escapeXML, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko", input => {
  _write(`Hello ${_escapeXML(name)}! Hello ${_toString(name)}! Hello ${_toString(missing)}!`);
});

export default _renderer;
export const render = _createRenderer(_renderer);