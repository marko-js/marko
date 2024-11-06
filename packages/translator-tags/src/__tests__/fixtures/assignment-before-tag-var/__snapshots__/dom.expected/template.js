export const _template_ = "<button>+</button><span><!> was <!></span>";
export const _walks_ = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _lastClickCount = /* @__PURE__ */_$.state("lastClickCount", (_scope, lastClickCount) => _$.data(_scope["#text/2"], lastClickCount));
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _lastClickCount(_scope, clickCount);
    _clickCount(_scope, clickCount + 1);
  };
};
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _lastClickCount(_scope, undefined);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko");