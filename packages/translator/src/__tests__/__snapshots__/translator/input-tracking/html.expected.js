import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("WGegpaPM", input => {
  const {
    a,
    b
  } = input;

  _write(`${_escapeXML(a)} ${_escapeXML(b)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);