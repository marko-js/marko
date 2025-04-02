export const _template = "<button><!> <!></button>";
export const _walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _textAlias = (_scope, textAlias) => {
  _$.data(_scope["#text/2"], textAlias);
};
export const _text = /* @__PURE__ */_$.value("text", (_scope, text) => {
  _$.data(_scope["#text/1"], text);
  _textAlias(_scope, text);
});
const _onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", (_scope, {
  onClick
}) => _$.on(_scope["#button/0"], "click", onClick));
export const _onClick = /* @__PURE__ */_$.value("onClick", _scope => _onClick_effect(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _onClick(_scope, input.onClick);
  _text(_scope, input.text);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _template, _walks, _setup, _input);