import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/let-tag/template.marko", input => {
  const x = 1;
  const y = 1;

  _write(`<div>1</div>${_escapeXML(y)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);