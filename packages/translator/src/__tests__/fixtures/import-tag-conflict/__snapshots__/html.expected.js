import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/import-tag-conflict/template.marko", input => {
  _write(`${_markHydrateNode(0)}${_escapeXML(asset1)} ${_markHydrateNode(1)}${_escapeXML(asset2)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);