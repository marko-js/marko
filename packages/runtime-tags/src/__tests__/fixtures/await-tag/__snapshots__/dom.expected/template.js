export const _template_ = "<div><button>Inc</button></div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$await_content3 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_4$await_content = /* @__PURE__ */_$.value("_params_4", (_scope, _params_4) => _value$await_content3(_scope, _params_4[0]));
const _count$await_content3 = /* @__PURE__ */_$.closure("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content3 = _$.register("__tests__/template.marko_3_renderer", /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", void 0, () => [_count$await_content3], () => _params_4$await_content));
const _value$await_content2 = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_3$await_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _value$await_content2(_scope, _params_3[0]));
const _count$await_content2 = /* @__PURE__ */_$.closure("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", void 0, () => [_count$await_content2], () => _params_3$await_content));
const _value$await_content = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _params_2$await_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _value$await_content(_scope, _params_2[0]));
const _count$await_content = /* @__PURE__ */_$.closure("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _await_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("Got: <!> <!>", /* over(1), replace, over(2), replace */"b%c%", void 0, () => [_count$await_content], () => _params_2$await_content));
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count_effect(_scope), () => _$.intersections([_count$await_content, _count$await_content2, _count$await_content3]));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);