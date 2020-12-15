import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/declaration/template.marko", input => {
  _write("<?xml version=\"1.0\" encoding=\"utf-8\"?><contact-info><name>Hello World</name></contact-info>");
});

export default _renderer;
export const render = _createRenderer(_renderer);