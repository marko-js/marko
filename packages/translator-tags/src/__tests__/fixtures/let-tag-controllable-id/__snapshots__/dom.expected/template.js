export const _template_ = "<button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_handler = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    handler
  } = _scope;
  _y(_scope, x, handler);
});
const _y_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko_0_y", (_scope, {
  y
}) => _$.on(_scope["#button/0"], "click", function () {
  _y(_scope, y + 1), y;
}));
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => {
  _$.data(_scope["#text/2"], y);
  _y_effect(_scope);
});
const _handler = /* @__PURE__ */_$.state("handler", 0, () => _expr_x_handler);
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.data(_scope["#text/1"], x), () => _expr_x_handler);
export function _setup_(_scope) {
  _x(_scope, 1);
  _handler(_scope, _handler2(_scope));
}
function _handler2(_scope) {
  return function (newValue) {
    _x(_scope, newValue + 1);
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko_0/handler", _handler2);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko", _template_, _walks_, _setup_);