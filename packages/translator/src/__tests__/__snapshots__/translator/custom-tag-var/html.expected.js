import _child from "./components/child/index.marko";
import { escapeXML as _escapeXML, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("src/__tests__/fixtures/custom-tag-var/template.marko", input => {
  const data = _child();

  _write(`${_escapeXML(data)}`);
});

export default _renderer;
export const render = _createRenderer(_renderer);