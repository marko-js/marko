export const _template_ = `${_counter_template}<button class=inc-parent> </button><button class=reset>reset</button>`;
export const _walks_ = /* beginChild, _counter_walks, endChild, get, next(1), get, out(1), get, over(1) */`/${_counter_walks}& D l b`;
import { _setup_ as _counter, _template_ as _counter_template, _walks_ as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/1"], "click", function () {
  _$.tagVarSignalChange(_scope["#childScope/0"], count + 1), count;
}));
const _count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", /* @__PURE__ */_$.value("count", (_scope, count) => {
  _$.data(_scope["#text/2"], count);
  _count_effect(_scope);
}));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/3"], "click", function () {
  _$.tagVarSignalChange(_scope["#childScope/0"], 0);
}));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _count);
  _counter(_scope["#childScope/0"]);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);