import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _wrapHydratable(input => {
  let _item;

  if (input.x) _item = {
    renderBody(y) {
      _write(`${_escapeXML(y)}`);
    }

  };

  _hello({
    item: _item
  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);