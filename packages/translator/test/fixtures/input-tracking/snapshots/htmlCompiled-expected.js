import { escapeXML as _escapeXML, hydrateMarker as _hydrateMarker, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/input-tracking/template.marko", input => {
  const {
    a,
    b
  } = input;

  _write(`${_hydrateMarker()}${_escapeXML(a)} ${_hydrateMarker()}${_escapeXML(b)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);