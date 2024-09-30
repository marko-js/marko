export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { register as _register, on as _on, data as _data, queueSource as _queueSource, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ = _register("packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0/_", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
const _increment_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0_increment", _scope => {
  const {
    increment
  } = _scope;
  _on(_scope["#button/0"], "click", increment);
});
const _increment = /* @__PURE__ */_value("increment", (_scope, increment) => _queueEffect(_scope, _increment_effect));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _increment(_scope, _(_scope));
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko");