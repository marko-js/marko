import { html as _html, value as _value2, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _html(_scope, value, "#text/0"));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let value;
  if (_dirty) ({
    value
  } = _destructure);
  _value(_scope, value, _dirty);
};
export { _value as _apply_value };
export const template = "<em>Testing</em> <!>";
export const walks = /* over(2), replace, over(1) */"c%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/update-html/template.marko");