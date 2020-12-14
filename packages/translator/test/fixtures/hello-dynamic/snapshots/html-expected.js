import { escapeXML as _escapeXML, toString as _toString, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _write(`Hello ${_escapeXML(input.name)}! Hello ${_toString(input.name)}! Hello ${_toString(input.missing)}!`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);