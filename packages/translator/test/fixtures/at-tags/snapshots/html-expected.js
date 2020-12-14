import { write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _wrapHydratable(input => {
  _hello({
    foo: {
      renderBody() {
        _write("Foo!");
      }

    }
  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);