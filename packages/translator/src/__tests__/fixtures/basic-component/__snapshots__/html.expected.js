import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _counter from "./components/counter.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-component/template.marko", input => {
  _write("<div>");

  _counter();

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);