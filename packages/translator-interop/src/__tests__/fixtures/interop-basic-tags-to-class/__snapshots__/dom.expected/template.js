import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<button id=tags> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
_$.register("__tests__/components/class-counter.marko", _classCounter);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/3", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $dynamicTag($scope, _classCounter, () => ({
    count: count
  }));
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);