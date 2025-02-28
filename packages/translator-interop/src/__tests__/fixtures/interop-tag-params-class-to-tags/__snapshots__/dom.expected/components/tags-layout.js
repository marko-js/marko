export const _template_ = "<button id=tags> </button><div><!></div>";
export const _walks_ = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_count = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    "input_content/5": input_content,
    "count/6": count
  } = _scope;
  _dynamicTag(_scope, input_content, () => [count, "hello"]);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, 0, 1);
const _count_effect = _$.effect("__tests__/components/tags-layout.marko_0_count", (_scope, {
  "count/6": count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/6", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _expr_input_content_count(_scope);
  _count_effect(_scope);
});
export const _input_content_ = /* @__PURE__ */_$.value("input_content/5", (_scope, input_content) => _expr_input_content_count(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/4", (_scope, input) => _input_content_(_scope, input.content));
export const _params__ = /* @__PURE__ */_$.value("_params_/3", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", _template_, _walks_, _setup_, () => _params__);