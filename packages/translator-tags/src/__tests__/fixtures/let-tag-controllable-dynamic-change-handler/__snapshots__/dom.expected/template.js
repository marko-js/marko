export const _template_ = "<button id=inc><!>|<!></button><button id=toggle>toggle</button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), get, over(1) */" D%c%l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_yChange = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    yChange
  } = _scope;
  _y(_scope, x, yChange);
});
const _y_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0_y", (_scope, {
  y
}) => _$.on(_scope["#button/0"], "click", function () {
  _y(_scope, y + 1), y;
}));
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => {
  _$.data(_scope["#text/2"], y);
  _y_effect(_scope);
});
const _yChange = /* @__PURE__ */_$.state("yChange", 0, () => _expr_x_yChange);
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.data(_scope["#text/1"], x), () => _expr_x_yChange);
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0", _scope => _$.on(_scope["#button/3"], "click", function () {
  _yChange(_scope, null);
}));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _x(_scope, 1);
  _yChange(_scope, _yChange2(_scope));
}
function _yChange2(_scope) {
  return function (newValue) {
    _x(_scope, newValue + 1);
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko_0/yChange", _yChange2);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-dynamic-change-handler/template.marko", _template_, _walks_, _setup_);