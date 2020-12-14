import { write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";

const _renderer = _wrapHydratable(input => {
  let _thing;

  if (x) _thing = {
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
export const render = _createRenderFn(_renderer);