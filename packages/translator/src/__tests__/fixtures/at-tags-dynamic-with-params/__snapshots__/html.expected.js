import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko", input => {
  let _item;

  if (x) _item = {
    renderBody(y) {
      _write(`${_markScopeOffset(0)}${_escapeXML(y)}`);
    }

  };

  _hello({
    item: _item
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);