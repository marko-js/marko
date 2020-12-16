import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = _register("packages/translator/test/fixtures/custom-tag-parameters/template.marko", input => {
  _customTag({
    renderBody(a, b, {
      c
    }) {
      _write(`<div>${_escapeXML(a)} ${_escapeXML(b)} ${_escapeXML(c)}</div>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);