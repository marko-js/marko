export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_content = _$.registerContent("__tests__/template.marko_1_renderer", "Body Content");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _x_content);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  "x/2": x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x ? null : "div");
}));
const _x = /* @__PURE__ */_$.state("x/2", (_scope, x) => {
  _dynamicTag(_scope, x);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, null);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);