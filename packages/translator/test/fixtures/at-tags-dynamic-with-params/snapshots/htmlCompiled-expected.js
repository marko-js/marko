import { escapeXML as _escapeXML, hydrateMarker as _hydrateMarker, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("packages/translator/test/fixtures/at-tags-dynamic-with-params/template.marko", input => {
  let _item;

  if (input.x) _item = {
    renderBody(y) {
      _write(`${_hydrateMarker()}${_escapeXML(y)}`);
    }

  };

  _hello({
    item: _item
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);