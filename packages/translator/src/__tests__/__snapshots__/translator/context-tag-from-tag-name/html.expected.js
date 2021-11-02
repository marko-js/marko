import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";
import _other from "./components/other.marko";

const _renderer = _register("J7/2K4Cb", input => {
  _other({
    renderBody() {
      _write("<span>");

      const message = _getInContext("X9AHTyyj");

      _write(`${_escapeXML(message)}</span>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);