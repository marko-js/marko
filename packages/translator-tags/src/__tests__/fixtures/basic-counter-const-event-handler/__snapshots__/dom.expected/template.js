export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _increment = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0/increment", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
});
const _increment2_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0_increment", _scope => {
  const {
    increment
  } = _scope;
  _$.on(_scope["#button/0"], "click", increment);
});
const _increment2 = /* @__PURE__ */_$.value("increment", (_scope, increment) => _increment2_effect(_scope));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _increment2(_scope, _increment(_scope));
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko", _template_, _walks_, _setup_);