import { data as _data, intersection as _intersection, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_value_dummy = /* @__PURE__ */_intersection(2, _scope => {
  const value = _scope["value"],
    dummy = _scope["dummy"];
  _data(_scope["#text/0"], (dummy, value));
});
const _dummy = /* @__PURE__ */_value2("dummy", (_scope, dummy, _dirty) => _expr_value_dummy(_scope, _dirty));
const _value = /* @__PURE__ */_value2("value", (_scope, value, _dirty) => _expr_value_dummy(_scope, _dirty));
const _setup = _scope => {
  _dummy(_scope, {});
};
export const attrs = (_scope, _destructure, _dirty = true) => {
  let value;
  if (_dirty) ({
    value
  } = _destructure);
  _value(_scope, value, _dirty);
};
export { _value };
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");