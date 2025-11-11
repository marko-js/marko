export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__n = /* @__PURE__ */_._const("n", $scope => _._text($scope["#text/0"], $scope.n));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__n($scope, $scope.$params2[0]));
const $for = /* @__PURE__ */_._for_to("#div/0", "<!>, ", /* replace, over(2) */"%c", 0, $for_content__$params);
const $input_from__OR__input_to__OR__input_step = /* @__PURE__ */_._or(6, $scope => $for($scope, [$scope.input_to, $scope.input_from, $scope.input_step]), 2);
export const $input_from = /* @__PURE__ */_._const("input_from", $input_from__OR__input_to__OR__input_step);
export const $input_to = /* @__PURE__ */_._const("input_to", $input_from__OR__input_to__OR__input_step);
export const $input_step = /* @__PURE__ */_._const("input_step", $input_from__OR__input_to__OR__input_step);
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_from($scope, $scope.input.from);
  $input_to($scope, $scope.input.to);
  $input_step($scope, $scope.input.step);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);