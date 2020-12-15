import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/import-tag/template.marko", input => {
  baz();

  _write(`${_escapeXML(c)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);