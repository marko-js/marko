export const _template_ = "<html><body><button>Toggle</button></body></html>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _toggle_effect = _$.effect("__tests__/template.marko_0_toggle", (_scope, {
  toggle
}) => _$.on(_scope["#button/1"], "click", function () {
  _toggle(_scope, !toggle);
}));
const _toggle = /* @__PURE__ */_$.state("toggle/2", (_scope, toggle) => {
  _$.attr(_scope["#body/0"], "data-toggle", toggle);
  _toggle_effect(_scope);
});
export function _setup_(_scope) {
  _toggle(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);