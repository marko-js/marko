import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";
import _child from "./components/child/index.marko";

const _renderer = _register("TZOEsrPr", input => {
  _child({
    name: "World",

    renderBody() {
      _write("This is the body content");
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);