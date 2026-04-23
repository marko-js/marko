export const $template = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%c";
import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _ from "@marko/runtime-tags/debug/dom";
const $showTagAtagA_content = _._content_resume("__tests__/template.marko_1_content", "Body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $input_content__OR__input_other = /* @__PURE__ */_._or(29, $scope => $dynamicTag($scope, $scope.content, () => ({
  class: ["a", "b"],
  other: $scope.other
})));
export const $content = /* @__PURE__ */_._const("content", $input_content__OR__input_other);
const $dynamicTag11 = /* @__PURE__ */_._dynamic_tag("#text/10");
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/1");
const $input_x__OR__input_other = /* @__PURE__ */_._or(30, $scope => $dynamicTag2($scope, $scope.x, () => ({
  class: ["a", "b"],
  other: $scope.other
})));
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/2");
const $dynamicTag4 = /* @__PURE__ */_._dynamic_tag("#text/3");
const $input_show__OR__input_other = /* @__PURE__ */_._or(31, $scope => {
  $dynamicTag3($scope, $scope.show ? "div" : null, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
  $dynamicTag4($scope, $scope.show && "div", () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
});
const $dynamicTag5 = /* @__PURE__ */_._dynamic_tag("#text/4");
const $input_isLarge__OR__input_other = /* @__PURE__ */_._or(33, $scope => $dynamicTag5($scope, $scope.isLarge ? "h1" : "h2", () => ({
  class: ["a", "b"],
  other: $scope.other
})));
const $dynamicTag6 = /* @__PURE__ */_._dynamic_tag("#text/5");
const $dynamicTag7 = /* @__PURE__ */_._dynamic_tag("#text/6");
const $dynamicTag8 = /* @__PURE__ */_._dynamic_tag("#text/7", $showTagAtagA_content);
const $input_showTagA__OR__input_other = /* @__PURE__ */_._or(32, $scope => {
  $dynamicTag6($scope, $scope.showTagA ? tagA : tagB, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
  $dynamicTag7($scope, $scope.showTagA && tagA, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
  $dynamicTag8($scope, $scope.showTagA && tagA, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
});
const $dynamicTag9 = /* @__PURE__ */_._dynamic_tag("#text/8");
const $input_tag__OR__input_other = /* @__PURE__ */_._or(34, $scope => $dynamicTag9($scope, $scope.tag || tagA, () => ({
  class: ["a", "b"],
  other: $scope.other
})));
const $dynamicTag10 = /* @__PURE__ */_._dynamic_tag("#text/9");
const $input_other__OR__largeHeading = /* @__PURE__ */_._or(37, $scope => $dynamicTag10($scope, $scope.largeHeading || "h2", () => ({
  class: ["a", "b"],
  other: $scope.other
})));
const $dynamicTag12 = /* @__PURE__ */_._dynamic_tag("#text/11");
const $dynamicTag13 = /* @__PURE__ */_._dynamic_tag("#text/12");
const $input_level__OR__input_other = /* @__PURE__ */_._or(35, $scope => {
  $dynamicTag12($scope, "h" + $scope.level, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
  $dynamicTag13($scope, `h${$scope.level}`, () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
});
const $dynamicTag14 = /* @__PURE__ */_._dynamic_tag("#text/13");
const $input_other__OR__tagConstA = /* @__PURE__ */_._or(39, $scope => $dynamicTag14($scope, $scope.tagConstA, () => ({
  class: ["a", "b"],
  other: $scope.other
})));
const $dynamicTag15 = /* @__PURE__ */_._dynamic_tag("#text/14");
const $input_other__OR__tagConstB = /* @__PURE__ */_._or(41, $scope => $dynamicTag15($scope, $scope.tagConstB, () => ({
  class: ["a", "b"],
  other: $scope.other
})));
export const $other = /* @__PURE__ */_._const("other", $scope => {
  $dynamicTag11($scope, globalThis.x = "a" + "b", () => ({
    class: ["a", "b"],
    other: $scope.other
  }));
  $input_content__OR__input_other($scope);
  $input_x__OR__input_other($scope);
  $input_show__OR__input_other($scope);
  $input_isLarge__OR__input_other($scope);
  $input_showTagA__OR__input_other($scope);
  $input_tag__OR__input_other($scope);
  $input_other__OR__largeHeading($scope);
  $input_level__OR__input_other($scope);
  $input_other__OR__tagConstA($scope);
  $input_other__OR__tagConstB($scope);
});
export const $x = /* @__PURE__ */_._const("x", $input_x__OR__input_other);
const $tagConstB = /* @__PURE__ */_._const("tagConstB", $input_other__OR__tagConstB);
export const $show = /* @__PURE__ */_._const("show", $scope => {
  $tagConstB($scope, $scope.show ? "div" : null);
  $input_show__OR__input_other($scope);
});
const $largeHeading = /* @__PURE__ */_._const("largeHeading", $input_other__OR__largeHeading);
export const $isLarge = /* @__PURE__ */_._const("isLarge", $scope => {
  $largeHeading($scope, $scope.isLarge && "h1");
  $input_isLarge__OR__input_other($scope);
});
export const $showTagA = /* @__PURE__ */_._const("showTagA", $input_showTagA__OR__input_other);
export const $tag = /* @__PURE__ */_._const("tag", $input_tag__OR__input_other);
export const $level = /* @__PURE__ */_._const("level", $input_level__OR__input_other);
const $tagConstA = /* @__PURE__ */_._const("tagConstA", $input_other__OR__tagConstA);
const $dynamicTag16 = /* @__PURE__ */_._dynamic_tag("#text/15");
const $dynamicTag17 = /* @__PURE__ */_._dynamic_tag("#text/16");
const $dynamicTag18 = /* @__PURE__ */_._dynamic_tag("#text/17");
const $dynamicTag19 = /* @__PURE__ */_._dynamic_tag("#text/18");
export function $setup($scope) {
  $tagConstA($scope, "a");
  $dynamicTag16($scope, `h${1}`);
  $dynamicTag17($scope, foo || 'div');
  $dynamicTag18($scope, foo + 'div');
  $dynamicTag19($scope, "d" + "iv");
}
export const $input = ($scope, input) => {
  $content($scope, input.content);
  $x($scope, input.x);
  $show($scope, input.show);
  $showTagA($scope, input.showTagA);
  $isLarge($scope, input.isLarge);
  $tag($scope, input.tag);
  $level($scope, input.level);
  $other($scope, input.other);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);