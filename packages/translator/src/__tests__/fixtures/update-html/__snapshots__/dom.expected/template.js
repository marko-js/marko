import { html as _html, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _value = /* @__PURE__ */_source("value", [], (_scope, value) => _html(_scope, value, "#text/0"));
export const attrs = /* @__PURE__ */_destructureSources([_value], (_scope, {
  value
}) => {
  _setSource(_scope, _value, value);
});
export { _value as _apply_value };
export const template = "<em>Testing</em> <!>";
export const walks = /* over(2), replace, over(1) */"c%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/update-html/template.marko");