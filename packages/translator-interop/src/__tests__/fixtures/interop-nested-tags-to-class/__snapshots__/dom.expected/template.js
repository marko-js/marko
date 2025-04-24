import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const $count$classlayout$content_effect = _$.effect("__tests__/template.marko_1_count", ($scope, {
  _: {
    count
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope._, count + 1), count;
}));
const $count$classlayout$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count$classlayout$content_effect($scope);
});
const $classlayout_content = _$.registerContent("__tests__/template.marko_1_renderer", "<button id=tags> </button>", /* get, next(1), get */" D ", 0, 0, $count$classlayout$content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$classlayout$content);
const $count = /* @__PURE__ */_$.state("count/1", $count_closure);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $classlayout_content);
export function $setup($scope) {
  $count($scope, 0);
  $dynamicTag($scope, _classLayout);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);