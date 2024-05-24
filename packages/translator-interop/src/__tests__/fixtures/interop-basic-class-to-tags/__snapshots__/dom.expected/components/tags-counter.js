import { attr as _attr, on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
});
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _attr(_scope["#button/0"], "data-parent", input.count));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
const _setup = _scope => {
  _count(_scope, 0);
};
export const _template_ = "<button id=tags> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko");