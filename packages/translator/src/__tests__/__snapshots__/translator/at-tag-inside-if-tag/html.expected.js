import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";
import _customTag from "./components/custom-tag/index.marko";

const _renderer = _register("nEl00T8v", input => {
  let _thing;

  if (input.x) _thing = {
    x: 1,

    renderBody() {
      _write("Hello");
    }

  };

  _customTag({
    thing: _thing
  });
});

export default _renderer;
export const render = _createRenderer(_renderer);