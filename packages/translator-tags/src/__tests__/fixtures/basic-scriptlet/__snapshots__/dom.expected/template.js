export const _template_ = "<div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
};
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko_0_clickCount", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  const doubleCount = clickCount * 2;
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _$.data(_scope["#text/1"], doubleCount);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko");