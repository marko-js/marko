import { wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/yield-tag/template.marko", input => {
  var _return;

  if (input.show) _return = 1;else _return = 2;
  return _return;
});

export default _renderer;
export const render = _createRenderer(_renderer);