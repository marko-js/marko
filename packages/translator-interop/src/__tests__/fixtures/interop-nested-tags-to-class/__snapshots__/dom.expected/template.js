import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_._resume("__tests__/components/class-layout.marko", _classLayout);
const $classlayout_content__count__script = _._script("__tests__/template.marko_1_count", ($scope, {
  _: {
    count
  }
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope._, ++count);
}));
const $classlayout_content__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $classlayout_content__count__script($scope);
});
const $classlayout_content__setup = $classlayout_content__count;
const $classlayout_content = _._content_resume("__tests__/template.marko_1_content", "<button id=tags> </button>", /* get, next(1), get, out(1) */" D l", $classlayout_content__setup);
const $count__closure = /* @__PURE__ */_._closure($classlayout_content__count);
const $count = /* @__PURE__ */_._let("count/1", $count__closure);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $classlayout_content);
export function $setup($scope) {
  $count($scope, 0);
  $dynamicTag($scope, _classLayout);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);