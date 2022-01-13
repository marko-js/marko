import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/custom-tag-parameters/template.marko", input => {
  _customTag({
    renderBody(a, b, {
      c
    }) {
      _write(`<div>${_markScopeOffset(0)}${_escapeXML(a)} ${_markScopeOffset(1)}${_escapeXML(b)} ${_markScopeOffset(2)}${_escapeXML(c)}</div>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);