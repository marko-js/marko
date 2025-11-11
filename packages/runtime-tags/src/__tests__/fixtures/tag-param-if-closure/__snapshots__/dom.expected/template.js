const $Foo_content2__walks = /* over(1), replace, over(2) */"b%c",
  $Foo_content2__template = "<!><!><!>";
export const $template = `<button>Increment</button>${$Foo_content2__template}<!>`;
export const $walks = /* get, over(1), beginChild, $Foo_content2__walks, endChild, over(1) */` b/${$Foo_content2__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Foo_content2__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $Foo_content2__input_content__OR__input_value = /* @__PURE__ */_._or(5, $scope => $Foo_content2__dynamicTag($scope, $scope.input_content, () => [$scope.input_value]));
const $Foo_content2__input_content = /* @__PURE__ */_._const("input_content", $Foo_content2__input_content__OR__input_value);
const $Foo_content2__input_value = /* @__PURE__ */_._const("input_value", $Foo_content2__input_content__OR__input_value);
const $Foo_content2__$params = /* @__PURE__ */_._const("$params2", $scope => $Foo_content2__input($scope, $scope.$params2[0]));
const $Foo_content2__input = /* @__PURE__ */_._const("input", $scope => {
  $Foo_content2__input_content($scope, $scope.input?.content);
  $Foo_content2__input_value($scope, $scope.input?.value);
});
const $if_content__a = /* @__PURE__ */_._closure_get("a", $scope => _._text($scope["#text/0"], $scope._._.a), $scope => $scope._._);
const $if_content__setup = $if_content__a;
const $Foo_content__if = /* @__PURE__ */_._if("#text/0", " ", /* get, over(1) */" b", $if_content__setup);
const $Foo_content__v = /* @__PURE__ */_._const("v", $scope => $Foo_content__if($scope, $scope.v ? 0 : 1));
const $Foo_content__$params = /* @__PURE__ */_._const("$params3", $scope => $Foo_content__v($scope, $scope.$params3[0]));
const $Foo_content = _._content_resume("__tests__/template.marko_1_content", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $Foo_content__$params);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/2", $scope => {
  $Foo_content2__input_value($scope["#childScope/1"], $scope.count);
  $count__script($scope);
});
const $a = /* @__PURE__ */_._const("a");
export function $setup($scope) {
  $Foo_content2__input_content($scope["#childScope/1"], $Foo_content($scope));
  $count($scope, 0);
  $a($scope, "abc");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);