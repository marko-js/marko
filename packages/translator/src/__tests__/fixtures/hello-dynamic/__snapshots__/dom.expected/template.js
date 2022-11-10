import { data as _data, html as _html, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _missing = /* @__PURE__ */_source(4, [], (_scope, missing) => _html(_scope[2], missing));
const _name = /* @__PURE__ */_source(3, [], (_scope, name) => {
  _data(_scope[0], name);
  _html(_scope[1], name);
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
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);