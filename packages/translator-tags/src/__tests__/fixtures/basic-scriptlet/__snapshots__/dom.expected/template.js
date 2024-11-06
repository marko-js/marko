export const _template_ = "<div><button> </button></div>";
export const _walks_ = /* next(1), get, next(1), get, out(2) */"D D m";
import { on as _on, data as _data, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
};
const _clickCount_effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_state("clickCount", (_scope, clickCount) => {
  const doubleCount = clickCount * 2;
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _data(_scope["#text/1"], doubleCount);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-scriptlet/template.marko");