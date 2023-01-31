import { setSource as _setSource, data as _data, queueSource as _queueSource, userEffect as _userEffect, subscriber as _subscriber, source as _source, register as _register, queueHydrate as _queueHydrate, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_a_b = /* @__PURE__ */_subscriber([], 2, (_scope, a = _scope["a"], b = _scope["b"]) => _data(_scope["#text/0"], "" + a + b));
const _b = /* @__PURE__ */_source("b", [_expr_a_b]);
const _a = /* @__PURE__ */_source("a", [_expr_a_b]);
const _hydrate_value = _register("packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_value", _scope => _userEffect(_scope, "cleanup", function () {
  const value = _scope["value"];
  const previousValue = _queueSource(_scope, _a, value + 1);
  return () => _queueSource(_scope, _b, previousValue);
}));
const _value = /* @__PURE__ */_source("value", [], (_scope, value) => _queueHydrate(_scope, _hydrate_value));
const _setup = _scope => {
  _setSource(_scope, _a, 0);
  _setSource(_scope, _b, 0);
};
export const attrs = /* @__PURE__ */_destructureSources([_value], (_scope, {
  value
}) => {
  _setSource(_scope, _value, value);
});
export { _value as _apply_value };
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko");