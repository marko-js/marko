export const _template_ = `${_displayIntersection_template}<button></button>`;
export const _walks_ = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
import { _setup_ as _displayIntersection, _value_ as _displayIntersection_input_value, _template_ as _displayIntersection_template, _walks_ as _displayIntersection_walks } from "./components/display-intersection.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/1"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _count_effect(_scope);
  _displayIntersection_input_value(_scope["#childScope/0"], count);
}, () => _$.inChild("#childScope/0", _displayIntersection_input_value));
export function _setup_(_scope) {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);