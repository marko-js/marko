import { data as _data, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
const _input = /* @__PURE__ */_value2("input", (_scope, input) => _value(_scope, input.value));
export const attrs = _input;
export { _input as _apply_input };
export const template = "<!> ";
export const walks = /* replace, over(2) */"%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/custom-tag-default-value/components/child.marko");