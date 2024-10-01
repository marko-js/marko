export const _template_ = "<!><span> <div></div></span><div><div>a</div><!>Hello Text &lt;a/><!><!><script>\n    Hello &lt;b> &lt;/script>\n  </script></div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1), next(1), over(1), replace, over(2), replace, over(2), replace, out(1) */"%bD lDb%c%c%l";
import { data as _data, html as _html, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input.x);
  _data(_scope["#text/1"], input.x);
  _data(_scope["#text/2"], input.x);
  _html(_scope, input.x, "#text/3");
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _html(_scope, "Hello HTML <a/>", "#text/4");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/placeholders/template.marko");