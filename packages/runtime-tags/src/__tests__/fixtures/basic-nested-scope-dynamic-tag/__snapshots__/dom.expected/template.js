export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $falseChild_content__count__script = _._script("__tests__/template.marko_1_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope._, $scope._.count + 1);
}));
const $falseChild_content__count = /* @__PURE__ */_._closure_get("count", $scope => {
  _._text($scope["#text/1"], $scope._.count);
  $falseChild_content__count__script($scope);
});
const $falseChild_content__setup = $falseChild_content__count;
const $falseChild_content = _._content_resume("__tests__/template.marko_1_content", "<button> </button>", /* get, next(1), get, out(1) */" D l", $falseChild_content__setup);
const $count__closure = /* @__PURE__ */_._closure($falseChild_content__count);
const $count = /* @__PURE__ */_._let("count/1", $count__closure);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $falseChild_content);
export function $setup($scope) {
  $count($scope, 0);
  $dynamicTag($scope, false || Child);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);