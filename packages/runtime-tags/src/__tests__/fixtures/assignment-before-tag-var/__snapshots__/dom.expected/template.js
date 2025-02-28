export const _template_ = "<button>+</button><span><!> was <!></span>";
export const _walks_ = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _lastClickCount = /* @__PURE__ */_$.state("lastClickCount/4", (_scope, lastClickCount) => _$.data(_scope["#text/2"], lastClickCount));
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  "clickCount/3": clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  _lastClickCount(_scope, clickCount);
  _clickCount(_scope, clickCount + 1), clickCount;
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount/3", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _lastClickCount(_scope, undefined);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);