const $Wrap_content__walks = /* over(1), replace, over(2) */"b%c",
  $Wrap_content__template = "<!><!><!>",
  $Message_content__walks = /* get, over(1) */" b",
  $Message_content__template = " ";
export const $template = `<!>${$Wrap_content__template}<!>`;
export const $walks = /* over(1), <Wrap>, over(1) */`b/${$Wrap_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume_dynamic_tag();
const $Wrap_content2__setup = $scope => {
  $Message_content__input_before($scope["#childScope/0"], "hello");
  $Message_content__input_after($scope["#childScope/0"], "world");
};
const $Wrap_content2 = _._content_resume("__tests__/template.marko_3_content", `<!>${$Message_content__template}<!>`, /* over(1), <Message>, over(1) */`b/${$Message_content__walks}&b`, $Wrap_content2__setup);
const $Message_content__input_before__OR__input_after = /* @__PURE__ */_._or(5, $scope => _._text($scope["#text/0"], $scope.input_before + $scope.input_after));
const $Message_content__input_before = /* @__PURE__ */_._const("input_before", $Message_content__input_before__OR__input_after);
const $Message_content__input_after = /* @__PURE__ */_._const("input_after", $Message_content__input_before__OR__input_after);
const $Message_content__$params = ($scope, $params3) => $Message_content__input($scope, $params3[0]);
const $Message_content__input = ($scope, input) => {
  $Message_content__input_before($scope, input.before);
  $Message_content__input_after($scope, input.after);
};
const $Wrap_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $Wrap_content__as__OR__onClick__OR__content = /* @__PURE__ */_._or(6, $scope => $Wrap_content__dynamicTag($scope, $scope.as, () => ({
  onClick: $scope.onClick,
  content: $scope.content
})), 2);
const $Wrap_content__as = /* @__PURE__ */_._const("as", $Wrap_content__as__OR__onClick__OR__content);
const $Wrap_content__onClick = /* @__PURE__ */_._const("onClick", $Wrap_content__as__OR__onClick__OR__content);
const $Wrap_content__content = /* @__PURE__ */_._const("content", $Wrap_content__as__OR__onClick__OR__content);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__$temp($scope, $params2?.[0]);
const $Wrap_content__$temp = ($scope, $temp) => {
  $Wrap_content__as($scope, $temp.as);
  $Wrap_content__onClick($scope, $temp.onClick);
  $Wrap_content__content($scope, $temp.content);
};
const $x = /* @__PURE__ */_._let("x/1", $scope => $Wrap_content__onClick($scope["#childScope/0"], $onClick($scope)));
export function $setup($scope) {
  $Wrap_content__content($scope["#childScope/0"], $Wrap_content2($scope));
  $Wrap_content__as($scope["#childScope/0"], "div");
  $x($scope, 1);
}
function $onClick($scope) {
  return function () {
    console.log($x($scope, $scope.x + 1) - 1);
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);