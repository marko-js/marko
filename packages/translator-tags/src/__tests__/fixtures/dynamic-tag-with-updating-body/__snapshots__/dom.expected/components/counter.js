export const _template_ = "<button id=count> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_state("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/components/counter.marko");