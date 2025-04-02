export const _template = "<button> </button>";
export const _walks = /* get, next(1), get, out(1) */" D l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", (_scope, {
  onClick
}) => _$.on(_scope["#button/0"], "click", onClick));
export const _onClick = /* @__PURE__ */_$.value("onClick", _onClick_effect);
export const _text = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/1"], text));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _text(_scope, input.text);
  _onClick(_scope, input.onClick);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _template, _walks, _setup, _input);