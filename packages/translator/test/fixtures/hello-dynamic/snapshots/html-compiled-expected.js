import { escapeXML as _escapeXML, hydrateMarker as _hydrateMarker, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/hello-dynamic/template.marko", input => {
  _write(`Hello ${_hydrateMarker()}${_escapeXML(input.name)}! Hello ${_hydrateMarker()}${_toString(input.name)}! Hello ${_hydrateMarker()}${_toString(input.missing)}!`);
});

export default _renderer;
export const render = _createRenderer(_renderer);