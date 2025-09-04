export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/tags/counter.marko_0_clickCount", ($scope, {
  clickCount
}) => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount)
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/2", ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $clickCount__script($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup);