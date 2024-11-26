export const _template_ = "<div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(clickCount + 1, _scope);
  };
};
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter/template.marko_0_clickCount", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_$.state("clickCount", clickCount => {
  _$.data("#text/1", clickCount);
  _clickCount_effect();
});
export function _setup_(_scope) {
  _clickCount(0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-counter/template.marko", _template_, _walks_, _setup_);