export const _template_ = "<table><tbody></tbody></table><button>Toggle</button>";
export const _walks_ = /* next(1), get, out(1), get, over(1) */"D l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _if_content = /* @__PURE__ */_$.createRenderer("<tr><td>Hi</td></tr>");
const _if = /* @__PURE__ */_$.conditional("#tbody/0", _if_content);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/1"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/2", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);