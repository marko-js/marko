export const _template_ = "<button id=tags> </button><!><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import { on as _on, data as _data, register as _register, queueSource as _queueSource, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_register("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko", _classCounter);
const _classCounter_input = _dynamicTagAttrs("#text/2");
const _expr_Text_count = /* @__PURE__ */_intersection(2, _scope => {
  const {
    count
  } = _scope;
  _classCounter_input(_scope, () => ({
    count: count
  }));
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", null, _expr_Text_count);
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count_effect);
}, _expr_Text_count);
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classCounter);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko");