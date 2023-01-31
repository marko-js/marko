import { setSource as _setSource, data as _data, subscriber as _subscriber, source as _source, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_value_dummy = /* @__PURE__ */_subscriber([], 2, (_scope, value = _scope["value"], dummy = _scope["dummy"]) => _data(_scope["#text/0"], (dummy, value)));
const _dummy = /* @__PURE__ */_source("dummy", [_expr_value_dummy]);
const _value = /* @__PURE__ */_source("value", [_expr_value_dummy]);
const _setup = _scope => {
  _setSource(_scope, _dummy, {});
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
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");