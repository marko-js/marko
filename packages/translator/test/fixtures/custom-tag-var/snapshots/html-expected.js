import _child from "./components/child/index.marko";
import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  const data = _child();

  _write(`${_escapeXML(data)}`);
});

export default _renderer;
export const render = _createRenderFn(_renderer);