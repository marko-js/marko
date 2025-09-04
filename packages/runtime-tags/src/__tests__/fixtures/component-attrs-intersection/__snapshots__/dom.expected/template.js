export const $template = `${_displayIntersection_template}<button></button>`;
export const $walks = /* beginChild, _displayIntersection_walks, endChild, get, over(1) */`/${_displayIntersection_walks}& b`;
import { $setup as _displayIntersection, $value as _displayIntersection_input_value, $template as _displayIntersection_template, $walks as _displayIntersection_walks } from "./tags/display-intersection.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/1"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => {
  _displayIntersection_input_value($scope["#childScope/0"], count);
  $count__script($scope);
});
export function $setup($scope) {
  _displayIntersection($scope["#childScope/0"]);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);