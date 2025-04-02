export const _template = "<button id=tags> </button><div><!></div>";
export const _walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_count = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    input_content,
    count
  } = _scope;
  _dynamicTag(_scope, input_content, () => [count, "hello"]);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, 0, 1);
const _count_effect = _$.effect("__tests__/components/tags-layout.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/6", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _expr_input_content_count(_scope);
  _count_effect(_scope);
});
export const _input_content = /* @__PURE__ */_$.value("input_content", _expr_input_content_count);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_content(_scope, input.content));
export function _setup(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", _template, _walks, _setup, _input);