import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("L5NGIXFW", input => {
  var _return;

  if (input.show) _return = 1;else _return = 2;
  return _return;
});

export default _renderer;
export const render = _createRenderer(_renderer);