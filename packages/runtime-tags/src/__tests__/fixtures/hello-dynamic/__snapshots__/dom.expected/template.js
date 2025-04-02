export const _template = "Hello <!>! Hello <!>! Hello <!>!";
export const _walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_missing = /* @__PURE__ */_$.value("input_missing", (_scope, input_missing) => _$.html(_scope, input_missing, "#text/2"));
export const _input_name = /* @__PURE__ */_$.value("input_name", (_scope, input_name) => {
  _$.data(_scope["#text/0"], input_name);
  _$.html(_scope, input_name, "#text/1");
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_name(_scope, input.name);
  _input_missing(_scope, input.missing);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);