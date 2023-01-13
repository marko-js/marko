import { setSource as _setSource, on as _on, queueSource as _queueSource, data as _data, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_expr_x_y = _register("packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y", _scope => _on(_scope[0], "click", () => {
  const x = _scope[3],
    y = _scope[4];
  return _queueSource(_scope, _x, _queueSource(_scope, _y, x + y));
}));
const _expr_x_y = /* @__PURE__ */_subscriber([], 2, (_scope, x = _scope[3], y = _scope[4]) => _queueHydrate(_scope, _hydrate_expr_x_y));
const _y = /* @__PURE__ */_source(4, [_expr_x_y], (_scope, y) => _data(_scope[2], y));
const _x = /* @__PURE__ */_source(3, [_expr_x_y], (_scope, x) => _data(_scope[1], x));
const _setup = _scope => {
  _setSource(_scope, _x, 1);
  _setSource(_scope, _y, 1);
};
export const template = "<button> </button><!>";
export const walks = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);