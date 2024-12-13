export const _template_ = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const _walks_ = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => {
  _$.on(_scope["#button/0"], "click", function () {
    _count(_scope, count + 2);
  });
  _$.on(_scope["#button/2"], "click", function () {
    _count(_scope, count * 3);
  });
  _$.on(_scope["#button/4"], "click", function () {
    _count(_scope, count ** 3);
  });
});
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _$.data(_scope["#text/3"], count);
  _$.data(_scope["#text/5"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);