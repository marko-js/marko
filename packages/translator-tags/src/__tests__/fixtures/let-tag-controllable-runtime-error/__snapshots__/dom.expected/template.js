export const _template_ = "<button id=inc><!>|<!></button><button id=toggle>toggle</button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), get, over(1) */" D%c%l b";
import { register as _register, on as _on, data as _data, queueEffect as _queueEffect, intersection as _intersection, state as _state, value as _value, changeHandler as _changeHandler, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _yChange = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko_0/yChange", _scope => function (newValue) {
  _x(_scope, newValue + 1);
});
const _onClick = _scope => {
  const {
    _y_change,
    y
  } = _scope;
  return function () {
    _y(_scope, y + 1, _y_change);
  };
};
const _expr__y_change_y_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko_0__y_change_y", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr__y_change_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _y_change,
    y
  } = _scope;
  _queueEffect(_scope, _expr__y_change_y_effect);
});
const _y = /* @__PURE__ */_state("y", (_scope, y) => _data(_scope["#text/2"], y), () => _expr__y_change_y);
const _y_change = _changeHandler("_y_change", /* @__PURE__ */_value("_y_change", (_scope, _y_change) => {}, () => _expr__y_change_y));
const _yChange2 = /* @__PURE__ */_state("yChange", (_scope, yChange) => _y_change(_scope, yChange), () => _y_change);
const _x = /* @__PURE__ */_state("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _y(_scope, x, _scope["_y_change"]);
}, () => _y);
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko_0", _scope => _on(_scope["#button/3"], "click", function () {
  _yChange2(_scope, null);
}));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _x(_scope, 1);
  _yChange2(_scope, _yChange(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-runtime-error/template.marko");