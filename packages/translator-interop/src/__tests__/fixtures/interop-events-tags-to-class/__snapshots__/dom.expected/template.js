import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><div id=tags-api> </div>";
export const $walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import _classCounter from "./components/class-counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.register("__tests__/components/class-counter.marko", _classCounter);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $count = /* @__PURE__ */_$.state("count/2", ($scope, count) => _$.data($scope["#text/1"], count));
export function $setup($scope) {
  $count($scope, 0);
  $dynamicTag($scope, _classCounter, () => ({
    onCount: $onCount($scope)
  }));
}
function $onCount($scope) {
  return function (newCount) {
    $count($scope, newCount);
  };
}
_$.register("__tests__/template.marko_0/onCount", $onCount);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);