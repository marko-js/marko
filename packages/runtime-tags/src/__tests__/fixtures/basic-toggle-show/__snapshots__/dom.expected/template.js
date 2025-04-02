export const _template = "<div><!><button>Toggle</button></div>";
export const _walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _if_content = /* @__PURE__ */_$.createRenderer("Hello!");
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/1"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/2", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);