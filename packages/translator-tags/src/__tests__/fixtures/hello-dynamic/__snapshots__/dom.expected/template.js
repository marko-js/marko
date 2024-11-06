export const _template_ = "Hello <!>! Hello <!>! Hello <!>!";
export const _walks_ = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.data(_scope["#text/0"], input.name);
  _$.html(_scope, input.name, "#text/1");
  _$.html(_scope, input.missing, "#text/2");
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/hello-dynamic/template.marko");