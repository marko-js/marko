export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", clickCount <= 1 ? () => {
  _clickCount(_scope, clickCount + 1), clickCount;
} : false));
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);