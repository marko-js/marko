import { wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  var _return;

  if (input.show) _return = 1;else _return = 2;
  return _return;
});

export default _renderer;
export const render = _createRenderFn(_renderer);