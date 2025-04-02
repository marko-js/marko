export const _template = `${_displayIntersection_template}<button></button>`;
export const _walks = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
import { _setup as _displayIntersection, _value as _displayIntersection_input_value, _template as _displayIntersection_template, _walks as _displayIntersection_walks } from "./tags/display-intersection.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/1"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/2", (_scope, count) => {
  _displayIntersection_input_value(_scope["#childScope/0"], count);
  _count_effect(_scope);
});
export function _setup(_scope) {
  _displayIntersection(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);