import { write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = _wrapHydratable(input => {
  _child({
    name: "World",

    renderBody() {
      _write("This is the body content");
    }

  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);