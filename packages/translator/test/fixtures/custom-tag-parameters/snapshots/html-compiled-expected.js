import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/custom-tag-parameters/template.marko", input => {
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