export const _template = "<button><!></button>";
export const _walks = /* get, next(1), replace, out(1) */" D%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content));
const _onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", (_scope, {
  onClick
}) => _$.on(_scope["#button/0"], "click", onClick));
export const _onClick = /* @__PURE__ */_$.value("onClick", _scope => _onClick_effect(_scope));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _onClick(_scope, input.onClick);
  _content(_scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", _template, _walks, _setup, _input);