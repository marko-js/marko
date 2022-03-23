import { register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-var/components/child/index.marko", input => {
  var _return;

  _return = 1;
  return _return;
});

export default _renderer;
export const render = _createRenderer(_renderer);