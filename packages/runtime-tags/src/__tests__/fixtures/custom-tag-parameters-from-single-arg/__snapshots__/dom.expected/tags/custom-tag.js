export const _template = "<button class=inc> </button><!><!>";
export const _walks = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_x = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    input_content,
    x
  } = _scope;
  _dynamicTag(_scope, input_content, () => x);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const _x_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/6", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _expr_input_content_x(_scope);
  _x_effect(_scope);
});
export const _input_content = /* @__PURE__ */_$.value("input_content", _expr_input_content_x);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_content(_scope, input.content));
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template, _walks, _setup, _input);