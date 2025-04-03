export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count$falseChild$content_effect = _$.effect("__tests__/template.marko_1_count", ($scope, {
  _: {
    count
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope._, count + 1), count;
}));
const $count$falseChild$content = /* @__PURE__ */_$.dynamicClosureRead("count", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count$falseChild$content_effect($scope);
});
const $falseChild_content = _$.registerContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", 0, 0, $scope => $count$falseChild$content($scope));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $falseChild_content);
const $count_closure = /* @__PURE__ */_$.dynamicClosure($count$falseChild$content);
const $count = /* @__PURE__ */_$.state("count/1", $count_closure);
export function $setup($scope) {
  $count($scope, 0);
  $dynamicTag($scope, false || Child);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);