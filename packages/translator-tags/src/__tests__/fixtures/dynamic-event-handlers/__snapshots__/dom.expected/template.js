export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return () => {
    _clickCount(_scope, clickCount + 1);
  };
};
const _clickCount_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-event-handlers/template.marko_0_clickCount", _scope => {
  const {
    clickCount
  } = _scope;
  _$.on(_scope["#button/0"], "click", clickCount <= 1 ? _onClick(_scope) : false);
});
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-event-handlers/template.marko");