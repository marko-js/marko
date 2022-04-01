import _child from "./components/child/index.marko";
import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/custom-tag-var/template.marko", input => {
  const data = _child();

  _write(`${_markHydrateNode(0)}${_escapeXML(data)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);