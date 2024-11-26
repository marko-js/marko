export const _template_ = "<button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _valueChange = _$.register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-static/template.marko_0/valueChange", _scope => function (newValue) {
  _x(_scope, newValue + 1);
});
const _onClick = _scope => {
  const {
    _y_change,
    y
  } = _scope;
  return function () {
    _y_change(y + 1);
  };
};
const _expr__y_change_y_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-static/template.marko_0__y_change_y", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr__y_change_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _y_change,
    y
  } = _scope;
  _expr__y_change_y_effect(_scope);
});
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => _$.data(_scope["#text/2"], y), () => _expr__y_change_y);
const _y_change = /* @__PURE__ */_$.value("_y_change", 0, () => _expr__y_change_y);
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _y(_scope, x, 1);
}, () => _y);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y_change(_scope, _valueChange(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-static/template.marko", _template_, _walks_, _setup_);