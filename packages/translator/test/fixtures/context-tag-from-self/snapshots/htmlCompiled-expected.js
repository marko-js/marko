import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, popContext as _popContext, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/context-tag-from-self/template.marko", input => {
  _write("<div>");

  _pushContext("packages/translator/test/fixtures/context-tag-from-self/template.marko", 1);

  _write("<span>");

  const x = _getInContext("packages/translator/test/fixtures/context-tag-from-self/template.marko");

  _write(`${_escapeXML(x)}</span>`);

  _popContext();

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);