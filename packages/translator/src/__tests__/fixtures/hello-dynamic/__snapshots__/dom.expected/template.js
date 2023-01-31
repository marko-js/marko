import { data as _data, html as _html, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _missing = /* @__PURE__ */_source("missing", [], (_scope, missing) => _html(_scope, missing, "#text/2"));
const _name = /* @__PURE__ */_source("name", [], (_scope, name) => {
  _data(_scope["#text/0"], name);
  _html(_scope, name, "#text/1");
});
export const attrs = /* @__PURE__ */_destructureSources([_name, _missing], (_scope, {
  name,
  missing
}) => {
  _setSource(_scope, _name, name);
  _setSource(_scope, _missing, missing);
});
export { _name as _apply_name, _missing as _apply_missing };
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko");