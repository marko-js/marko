export const _template_ = `${_counter_template}<button class=reset>reset</button>`;
export const _walks_ = /* beginChild, _counter_walks, endChild, get, over(1) */`/${_counter_walks}& b`;
import { _setup_ as _counter, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count = _$.registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0_count", (_scope, count) => {});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko_0", _scope => _$.on(_scope["#button/1"], "click", function () {
  _$.tagVarSignalChange(_scope["#childScope/0"], 0);
}));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _count);
  _counter(_scope["#childScope/0"]);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-var-assignment/template.marko", _template_, _walks_, _setup_);