import { markScopeOffset as _markScopeOffset, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/yield-tag/template.marko", input => {
  var _return;

  _write(`${_markScopeOffset(0)}`);

  if (show) _return = 1;else _return = 2;
  return _return;
});

export default _renderer;
export const render = _createRenderer(_renderer);