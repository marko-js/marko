export const _template_ = "<button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import { register as _register, on as _on, data as _data, queueSource as _queueSource, queueControllableSource as _queueControllableSource, queueEffect as _queueEffect, intersection as _intersection, value as _value, changeHandler as _changeHandler, initValue as _initValue, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko_0/_", _scope => function (newValue) {
  _queueSource(_scope, _x, newValue + 1);
});
const _onClick = _scope => {
  const {
    _y_change,
    y
  } = _scope;
  return function () {
    _queueControllableSource(_scope, _y, _y_change, y + 1);
  };
};
const _expr__y_change_y_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko_0__y_change_y", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr__y_change_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _y_change,
    y
  } = _scope;
  _queueEffect(_scope, _expr__y_change_y_effect);
});
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/2"], y), () => _expr__y_change_y);
const _y_change = _changeHandler("_y_change", /* @__PURE__ */_value("_y_change", (_scope, _y_change) => {}, () => _expr__y_change_y));
const _handler = /* @__PURE__ */_value("handler", (_scope, handler) => _y_change(_scope, handler), () => _y_change);
const _y_init = _initValue("y", _y);
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  (_scope["_y_change"] ? _y : _y_init)(_scope, x);
}, () => _y);
export function _setup_(_scope) {
  _x(_scope, 1);
  _handler(_scope, _(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-id/template.marko");