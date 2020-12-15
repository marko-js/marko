import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { escapeXML as _escapeXML, write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/import-tag-conflict/template.marko", input => {
  _write(`${_escapeXML(asset1)} ${_escapeXML(asset2)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);