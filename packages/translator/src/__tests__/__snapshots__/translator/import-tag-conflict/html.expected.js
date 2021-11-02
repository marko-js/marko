import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("5G72VW1e", input => {
  _write(`${_escapeXML(asset1)} ${_escapeXML(asset2)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);