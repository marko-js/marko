export const _template_ = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(2), replace, out(1) */"%bD lDb%c%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _$.data(_scope["#text/0"], input.x);
  _$.data(_scope["#text/1"], input.x);
  _$.data(_scope["#text/2"], input.x);
  _$.html(_scope, input.x, "#text/3");
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _$.html(_scope, "Hello HTML <a/>", "#text/4");
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/placeholders/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);