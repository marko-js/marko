export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _increment_effect = _$.effect("__tests__/template.marko_0_increment", (_scope, {
  increment
}) => _$.on(_scope["#button/0"], "click", increment));
const _increment = /* @__PURE__ */_$.value("increment", _scope => _increment_effect(_scope));
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _increment(_scope, _increment2(_scope));
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
function _increment2(_scope, {
  clickCount
} = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/increment", _increment2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);