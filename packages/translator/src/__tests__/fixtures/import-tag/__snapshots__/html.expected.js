import "./foo";
import { b as c } from "./bar";
import baz from "./components/baz.marko";
import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/import-tag/template.marko", input => {
  baz();

  _write(`${_markScopeOffset(0)}${_escapeXML(c)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);