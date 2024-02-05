import { on as _on, queueSource as _queueSource, data as _data, intersection as _intersection, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_input_count = /* @__PURE__ */_intersection(2, _scope => {
  const {
    input,
    count
  } = _scope;
  _data(_scope["#text/1"], input.format(count));
});
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/component-attrs-import-value/components/counter.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => _queueEffect(_scope, _count_effect), _expr_input_count);
const _input = /* @__PURE__ */_value("input", null, _expr_input_count);
const _setup = _scope => {
  _count(_scope, 0);
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/component-attrs-import-value/components/counter.marko");