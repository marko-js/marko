export const _template_ = "<table><tbody><!></tbody></table><button>Toggle</button>";
export const _walks_ = /* next(2), replace, out(2), get, over(1) */"E%m b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<tr><td>Hi</td></tr>", ""));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/1"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _if_content : null);
});
export function _setup_(_scope) {
  _show(_scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);