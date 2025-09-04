import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><div id=tags-api> </div>";
export const $walks = /* over(1), replace, over(1), next(1), get, out(1) */"b%bD l";
import _classCounter from "./components/class-counter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume("__tests__/components/class-counter.marko", _classCounter);
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => _._text($scope["#text/1"], count));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
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
_._resume("__tests__/template.marko_0/onCount", $onCount);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);