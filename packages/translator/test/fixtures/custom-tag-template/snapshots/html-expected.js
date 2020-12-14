import _hello from "./hello.marko";
import { wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _hello({
    name: "Frank"
  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);