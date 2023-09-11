import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/dist/debug/dom";
const _inputRenderBody_input = _dynamicTagAttrs("#text/2");
const _expr_dynamicTagName_count = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/2": dynamicTagName,
    count
  } = _scope;
  _inputRenderBody_input(_scope, () => ({
    value: [count, "hello"]
  }));
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", null, _expr_dynamicTagName_count);
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
}, _expr_dynamicTagName_count);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
const _setup = _scope => {
  _count(_scope, 0);
};
export const attrs = _input;
export { _input };
export const template = "<button id=tags> </button><div><!></div>";
export const walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko");