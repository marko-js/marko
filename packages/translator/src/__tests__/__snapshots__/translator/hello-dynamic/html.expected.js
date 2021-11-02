import { escapeXML as _escapeXML, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("lmbWBe9s", input => {
  _write(`Hello ${_escapeXML(input.name)}! Hello ${_toString(input.name)}! Hello ${_toString(input.missing)}!`);
});

export default _renderer;
export const render = _createRenderer(_renderer);