export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__num__script = _._script("__tests__/template.marko_1_num", $scope => _._on($scope["#button/0"], "click", function () {
  $num($scope._, $scope._.num + 1);
}));
const $for_content__num = /* @__PURE__ */_._for_closure("#text/0", $for_content__num__script);
const $for_content__i = /* @__PURE__ */_._const("i", $scope => _._text($scope["#text/1"], $scope.i));
const $for_content__setup = $for_content__num;
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__i($scope, $scope.$params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<button> </button>", /* get, next(1), get, out(1) */" D l", $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_to("#text/0", $for_content);
const $num = /* @__PURE__ */_._let("num/1", $scope => {
  $for($scope, [$scope.num, 0, 1]);
  $for_content__num($scope);
});
export function $setup($scope) {
  $num($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);