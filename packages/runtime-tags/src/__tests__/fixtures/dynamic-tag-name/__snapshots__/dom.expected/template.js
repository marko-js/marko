export const $template = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b%c";
import tagA from "./tags/tag-a/index.marko";
import tagB from "./tags/tag-b/index.marko";
const foo = '';
import * as _$ from "@marko/runtime-tags/debug/dom";
const $showTagAtagA_content = _$.registerContent("__tests__/template.marko_1_renderer", "Body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $expr_content_other = /* @__PURE__ */_$.intersection(29, $scope => {
  const {
    content,
    other
  } = $scope;
  $dynamicTag($scope, content, () => ({
    class: ["a", "b"],
    other: other
  }));
});
export const $content = /* @__PURE__ */_$.value("content", $expr_content_other);
const $dynamicTag11 = /* @__PURE__ */_$.dynamicTag("#text/10");
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/1");
const $expr_x_other = /* @__PURE__ */_$.intersection(30, $scope => {
  const {
    x,
    other
  } = $scope;
  $dynamicTag2($scope, x, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag3 = /* @__PURE__ */_$.dynamicTag("#text/2");
const $dynamicTag4 = /* @__PURE__ */_$.dynamicTag("#text/3");
const $expr_show_other = /* @__PURE__ */_$.intersection(31, $scope => {
  const {
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
const $dynamicTag5 = /* @__PURE__ */_$.dynamicTag("#text/4");
const $expr_isLarge_other = /* @__PURE__ */_$.intersection(33, $scope => {
  const {
    isLarge,
    other
  } = $scope;
  $dynamicTag5($scope, isLarge ? "h1" : "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag6 = /* @__PURE__ */_$.dynamicTag("#text/5");
const $dynamicTag7 = /* @__PURE__ */_$.dynamicTag("#text/6");
const $dynamicTag8 = /* @__PURE__ */_$.dynamicTag("#text/7", $showTagAtagA_content);
const $expr_showTagA_other = /* @__PURE__ */_$.intersection(32, $scope => {
  const {
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
const $dynamicTag9 = /* @__PURE__ */_$.dynamicTag("#text/8");
const $expr_tag_other = /* @__PURE__ */_$.intersection(34, $scope => {
  const {
    tag,
    other
  } = $scope;
  $dynamicTag9($scope, tag || tagA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag10 = /* @__PURE__ */_$.dynamicTag("#text/9");
const $expr_other_largeHeading = /* @__PURE__ */_$.intersection(37, $scope => {
  const {
    other,
    largeHeading
  } = $scope;
  $dynamicTag10($scope, largeHeading || "h2", () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag12 = /* @__PURE__ */_$.dynamicTag("#text/11");
const $dynamicTag13 = /* @__PURE__ */_$.dynamicTag("#text/12");
const $expr_level_other = /* @__PURE__ */_$.intersection(35, $scope => {
  const {
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
const $dynamicTag14 = /* @__PURE__ */_$.dynamicTag("#text/13");
const $expr_other_tagConstA = /* @__PURE__ */_$.intersection(39, $scope => {
  const {
    other,
    tagConstA
  } = $scope;
  $dynamicTag14($scope, tagConstA, () => ({
    class: ["a", "b"],
    other: other
  }));
});
const $dynamicTag15 = /* @__PURE__ */_$.dynamicTag("#text/14");
const $expr_other_tagConstB = /* @__PURE__ */_$.intersection(41, $scope => {
  const {
    other,
    tagConstB
  } = $scope;
  $dynamicTag15($scope, tagConstB, () => ({
    class: ["a", "b"],
    other: other
  }));
});
export const $other = /* @__PURE__ */_$.value("other", ($scope, other) => {
  $dynamicTag11($scope, global.x = "a" + "b", () => ({
    class: ["a", "b"],
    other: other
  }));
  $expr_content_other($scope);
  $expr_x_other($scope);
  $expr_show_other($scope);
  $expr_isLarge_other($scope);
  $expr_showTagA_other($scope);
  $expr_tag_other($scope);
  $expr_other_largeHeading($scope);
  $expr_level_other($scope);
  $expr_other_tagConstA($scope);
  $expr_other_tagConstB($scope);
});
export const $x = /* @__PURE__ */_$.value("x", $expr_x_other);
const $tagConstB = /* @__PURE__ */_$.value("tagConstB", $expr_other_tagConstB);
export const $show = /* @__PURE__ */_$.value("show", ($scope, show) => {
  $tagConstB($scope, show ? "div" : null);
  $expr_show_other($scope);
});
const $largeHeading = /* @__PURE__ */_$.value("largeHeading", $expr_other_largeHeading);
export const $isLarge = /* @__PURE__ */_$.value("isLarge", ($scope, isLarge) => {
  $largeHeading($scope, isLarge && "h1");
  $expr_isLarge_other($scope);
});
export const $showTagA = /* @__PURE__ */_$.value("showTagA", $expr_showTagA_other);
export const $tag = /* @__PURE__ */_$.value("tag", $expr_tag_other);
export const $level = /* @__PURE__ */_$.value("level", $expr_level_other);
const $tagConstA = /* @__PURE__ */_$.value("tagConstA", $expr_other_tagConstA);
const $dynamicTag16 = /* @__PURE__ */_$.dynamicTag("#text/15");
const $dynamicTag17 = /* @__PURE__ */_$.dynamicTag("#text/16");
const $dynamicTag18 = /* @__PURE__ */_$.dynamicTag("#text/17");
const $dynamicTag19 = /* @__PURE__ */_$.dynamicTag("#text/18");
export function $setup($scope) {
  $tagConstA($scope, "a");
  $dynamicTag16($scope, `h${1}`);
  $dynamicTag17($scope, foo || 'div');
  $dynamicTag18($scope, foo + 'div');
  $dynamicTag19($scope, "d" + "iv");
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $content($scope, input.content);
  $x($scope, input.x);
  $show($scope, input.show);
  $showTagA($scope, input.showTagA);
  $isLarge($scope, input.isLarge);
  $tag($scope, input.tag);
  $level($scope, input.level);
  $other($scope, input.other);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);