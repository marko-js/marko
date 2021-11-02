import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("Nh7PwUt/", input => {
  _hello({
    foo: {
      renderBody() {
        _write("Foo!");
      }

    }
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);