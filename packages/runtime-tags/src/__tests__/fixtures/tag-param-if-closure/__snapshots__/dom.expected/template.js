const $define_content__walks = /* over(1), replace, over(2) */"b%c",
  $define_content__template = "<!><!><!>";
export const $template = `<button>Increment</button>${$define_content__template}<!>`;
export const $walks = /* get, over(1), beginChild, $define_content__walks, endChild, over(1) */` b/${$define_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $define_content__input_content__OR__input_value = /* @__PURE__ */_._or(5, $scope => {
  let {
    input_content,
    input_value
  } = $scope;
  $define_content__dynamicTag($scope, input_content, () => [input_value]);
});
const $define_content__input_content = /* @__PURE__ */_._const("input_content", $define_content__input_content__OR__input_value);
const $define_content__input_value = /* @__PURE__ */_._const("input_value", $define_content__input_content__OR__input_value);
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__input($scope, $params2[0]));
const $define_content__input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $define_content__input_content($scope, input?.content);
  $define_content__input_value($scope, input?.value);
});
const $if_content__a = /* @__PURE__ */_._closure_get("a", ($scope, a) => _._text($scope["#text/0"], a), $scope => $scope._._);
const $if_content__setup = $if_content__a;
const $if_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", $if_content__setup);
const $Foo_content__if = /* @__PURE__ */_._if("#text/0", $if_content);
const $Foo_content__v = /* @__PURE__ */_._const("v", ($scope, v) => $Foo_content__if($scope, v ? 0 : 1));
const $Foo_content__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $Foo_content__v($scope, $params3[0]));
const $Foo_content = _._content_resume("__tests__/template.marko_1_content", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $Foo_content__$params);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => {
  $define_content__input_value($scope["#childScope/1"], count);
  $count__script($scope);
});
const $a = /* @__PURE__ */_._const("a");
export function $setup($scope) {
  $define_content__input_content($scope["#childScope/1"], $Foo_content($scope));
  $count($scope, 0);
  $a($scope, "abc");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);