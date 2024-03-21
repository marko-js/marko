import { data as _data, intersection as _intersection, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_value_dummy = /* @__PURE__ */_intersection(2, _scope => {
  const {
    value,
    dummy
  } = _scope;
  _data(_scope["#text/0"], (dummy, value));
});
const _dummy = /* @__PURE__ */_value2("dummy", null, _expr_value_dummy);
const _value = /* @__PURE__ */_value2("value", null, _expr_value_dummy);
const _destructure2 = (_scope, _destructure, _clean) => {
  let value;
  if (!_clean) ({
    value
  } = _destructure);
  _value(_scope, value, _clean);
};
const _input = /* @__PURE__ */_value2("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
const _setup = _scope => {
  _dummy(_scope, {});
};
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");