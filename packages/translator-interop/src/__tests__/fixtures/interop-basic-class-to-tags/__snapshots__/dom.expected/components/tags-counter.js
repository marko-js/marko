import { attr as _attr, on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/dom";
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
});
const _input = /* @__PURE__ */_value("input", (_scope, input) => _attr(_scope["#button/0"], "data-parent", input.count));
const _setup = _scope => {
  _count(_scope, 0);
};
export const attrs = _input;
export { _input };
export const template = "<button id=tags> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko");