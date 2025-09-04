export const $template = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%c";
import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _ from "@marko/runtime-tags/debug/dom";
const $showTagAtagA_content = _._content_resume("__tests__/template.marko_1_content", "Body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $content__OR__other = /* @__PURE__ */_._or(29, $scope => {
  let {
    content,
    other
  } = $scope;
  $dynamicTag($scope, content, () => ({
    class: ["a", "b"],
    other: other
  }));
});
export const $content = /* @__PURE__ */_._const("content", $content__OR__other);
const $dynamicTag11 = /* @__PURE__ */_._dynamic_tag("#text/10");
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/1");
const $x__OR__other = /* @__PURE__ */_._or(30, $scope => {
  let {
    x,
    other
  } = $scope;
  $dynamicTag2($scope, x, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/2");
const $dynamicTag4 = /* @__PURE__ */_._dynamic_tag("#text/3");
const $show__OR__other = /* @__PURE__ */_._or(31, $scope => {
  let {
    show,
    other
  } = $scope;
  $dynamicTag3($scope, show ? "div" : null, () => ({
    class: ["a", "b"],
    other: other
  }));
  $dynamicTag4($scope, show && "div", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag5 = /* @__PURE__ */_._dynamic_tag("#text/4");
const $isLarge__OR__other = /* @__PURE__ */_._or(33, $scope => {
  let {
    isLarge,
    other
  } = $scope;
  $dynamicTag5($scope, isLarge ? "h1" : "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag6 = /* @__PURE__ */_._dynamic_tag("#text/5");
const $dynamicTag7 = /* @__PURE__ */_._dynamic_tag("#text/6");
const $dynamicTag8 = /* @__PURE__ */_._dynamic_tag("#text/7", $showTagAtagA_content);
const $showTagA__OR__other = /* @__PURE__ */_._or(32, $scope => {
  let {
    showTagA,
    other
  } = $scope;
  $dynamicTag6($scope, showTagA ? tagA : tagB, () => ({
    class: ["a", "b"],
    other: other
  }));
  $dynamicTag7($scope, showTagA && tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
  $dynamicTag8($scope, showTagA && tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag9 = /* @__PURE__ */_._dynamic_tag("#text/8");
const $tag__OR__other = /* @__PURE__ */_._or(34, $scope => {
  let {
    tag,
    other
  } = $scope;
  $dynamicTag9($scope, tag || tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag10 = /* @__PURE__ */_._dynamic_tag("#text/9");
const $other__OR__largeHeading = /* @__PURE__ */_._or(37, $scope => {
  let {
    other,
    largeHeading
  } = $scope;
  $dynamicTag10($scope, largeHeading || "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag12 = /* @__PURE__ */_._dynamic_tag("#text/11");
const $dynamicTag13 = /* @__PURE__ */_._dynamic_tag("#text/12");
const $level__OR__other = /* @__PURE__ */_._or(35, $scope => {
  let {
    level,
    other
  } = $scope;
  $dynamicTag12($scope, "h" + level, () => ({
    class: ["a", "b"],
    other: other
  }));
  $dynamicTag13($scope, `h${level}`, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag14 = /* @__PURE__ */_._dynamic_tag("#text/13");
const $other__OR__tagConstA = /* @__PURE__ */_._or(39, $scope => {
  let {
    other,
    tagConstA
  } = $scope;
  $dynamicTag14($scope, tagConstA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag15 = /* @__PURE__ */_._dynamic_tag("#text/14");
const $other__OR__tagConstB = /* @__PURE__ */_._or(41, $scope => {
  let {
    other,
    tagConstB
  } = $scope;
  $dynamicTag15($scope, tagConstB, () => ({
    class: ["a", "b"],
    other: other
  }));
});
export const $other = /* @__PURE__ */_._const("other", ($scope, other) => {
  $dynamicTag11($scope, global.x = "a" + "b", () => ({
    class: ["a", "b"],
    other: other
  }));
  $content__OR__other($scope);
  $x__OR__other($scope);
  $show__OR__other($scope);
  $isLarge__OR__other($scope);
  $showTagA__OR__other($scope);
  $tag__OR__other($scope);
  $other__OR__largeHeading($scope);
  $level__OR__other($scope);
  $other__OR__tagConstA($scope);
  $other__OR__tagConstB($scope);
});
export const $x = /* @__PURE__ */_._const("x", $x__OR__other);
const $tagConstB = /* @__PURE__ */_._const("tagConstB", $other__OR__tagConstB);
export const $show = /* @__PURE__ */_._const("show", ($scope, show) => {
  $tagConstB($scope, show ? "div" : null);
  $show__OR__other($scope);
});
const $largeHeading = /* @__PURE__ */_._const("largeHeading", $other__OR__largeHeading);
export const $isLarge = /* @__PURE__ */_._const("isLarge", ($scope, isLarge) => {
  $largeHeading($scope, isLarge && "h1");
  $isLarge__OR__other($scope);
});
export const $showTagA = /* @__PURE__ */_._const("showTagA", $showTagA__OR__other);
export const $tag = /* @__PURE__ */_._const("tag", $tag__OR__other);
export const $level = /* @__PURE__ */_._const("level", $level__OR__other);
const $tagConstA = /* @__PURE__ */_._const("tagConstA", $other__OR__tagConstA);
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
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $content($scope, input.content);
  $x($scope, input.x);
  $show($scope, input.show);
  $showTagA($scope, input.showTagA);
  $isLarge($scope, input.isLarge);
  $tag($scope, input.tag);
  $level($scope, input.level);
  $other($scope, input.other);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);