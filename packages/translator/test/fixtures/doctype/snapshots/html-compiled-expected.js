import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/doctype/template.marko", input => {
  _write("<!DOCTYPE html><html><head><title>Title of the document</title></head><body>The content of the document......</body></html>");
});

export default _renderer;
export const render = _createRenderer(_renderer);