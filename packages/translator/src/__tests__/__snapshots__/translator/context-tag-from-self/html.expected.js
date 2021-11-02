import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, popContext as _popContext, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("UFl+/m9P", input => {
  _write("<div>");

  _pushContext("UFl+/m9P", 1);

  _write("<span>");

  const x = _getInContext("UFl+/m9P");

  _write(`${_escapeXML(x)}</span>`);

  _popContext();

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);