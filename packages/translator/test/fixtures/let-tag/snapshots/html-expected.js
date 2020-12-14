import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  const x = 1;
  const y = 1;

  _write(`<div>1</div>${_escapeXML(y)}`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);