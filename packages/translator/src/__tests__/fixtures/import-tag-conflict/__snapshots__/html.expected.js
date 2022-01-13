import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/import-tag-conflict/template.marko", input => {
  _write(`${_markScopeOffset(0)}${_escapeXML(asset1)} ${_markScopeOffset(1)}${_escapeXML(asset2)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);