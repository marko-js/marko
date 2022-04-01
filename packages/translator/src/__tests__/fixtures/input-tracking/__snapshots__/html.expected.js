import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/input-tracking/template.marko", input => {
  const {
    a,
    b
  } = input;

  _write(`${_markHydrateNode(0)}${_escapeXML(a)} ${_markHydrateNode(1)}${_escapeXML(b)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);