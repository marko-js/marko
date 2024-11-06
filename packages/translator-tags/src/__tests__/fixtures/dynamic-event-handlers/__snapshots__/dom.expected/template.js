export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return () => {
    _clickCount(_scope, clickCount + 1);
  };
};
const _clickCount_effect = _effect("packages/translator-tags/src/__tests__/fixtures/dynamic-event-handlers/template.marko_0_clickCount", _scope => {
  const {
    clickCount
  } = _scope;
  _on(_scope["#button/0"], "click", clickCount <= 1 ? _onClick(_scope) : false);
});
const _clickCount = /* @__PURE__ */_state("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-event-handlers/template.marko");