import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<button id=tags> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2) */" D l%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
_._resume("__tests__/components/class-counter.marko", _classCounter);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/3", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $dynamicTag($scope, _classCounter, () => ({
    count: count
  }));
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);