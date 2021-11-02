import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("D8IPQ0Df", input => {
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
export const render = _createRenderer(_renderer);