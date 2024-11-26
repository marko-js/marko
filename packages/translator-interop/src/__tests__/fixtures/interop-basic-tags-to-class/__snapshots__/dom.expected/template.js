export const _template_ = "<button id=tags> </button><!><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_$.register("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko", _classCounter);
const _classCounter_input = _$.dynamicTagAttrs("#text/2");
const _expr_Text_count = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    count
  } = _scope;
  _classCounter_input(_scope, () => ({
    count: count
  }));
}, () => _classCounter_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", 0, () => _expr_Text_count);
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count_effect(_scope);
}, () => _expr_Text_count);
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classCounter);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko", _template_, _walks_, _setup_);