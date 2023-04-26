import { data as _data, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let value;
  if (_dirty) ({
    value
  } = _destructure);
  _value(_scope, value, _dirty);
};
export { _value };
export const template = "<div>Child 2 has <!></div>";
export const walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-tags/components/child2.marko");