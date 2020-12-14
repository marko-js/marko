import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _write("<span>");

  const x = _getInContext("packages/translator/test/fixtures/context-tag-from-tag-name/template.marko/components/other.marko");

  _write(`${_escapeXML(x)}</span>`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);