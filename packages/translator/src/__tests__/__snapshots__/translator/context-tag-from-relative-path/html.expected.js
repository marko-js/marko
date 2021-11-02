import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("q+lAdOIr", input => {
  Other({
    renderBody() {
      _write("<span>");

      const message = _getInContext("xEhypkzq");

      _write(`${_escapeXML(message)}</span>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);