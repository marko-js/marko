import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/custom-tag-render-body/template.marko", input => {
  _child({
    name: "World",

    renderBody() {
      _write("This is the body content");
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);