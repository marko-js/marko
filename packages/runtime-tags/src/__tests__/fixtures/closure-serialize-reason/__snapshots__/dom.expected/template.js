export const $template = "<div></div><button> </button>";
export const $walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__getMessage = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => _._text($scope["#text/0"], $scope._.getMessage()));
const $if_content__setup = $if_content__getMessage;
const $if = /* @__PURE__ */_._if("#div/0", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/1"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/6", $scope => {
  _._text($scope["#text/2"], $scope.x);
  $if($scope, $scope.x ? 0 : 1);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 0);
}
const $getMessage2 = /* @__PURE__ */_._const("getMessage", $if_content__getMessage);
export const $input_message = /* @__PURE__ */_._const("input_message", $scope => $getMessage2($scope, $getMessage($scope)));
export const $input = ($scope, input) => $input_message($scope, input.message);
function $getMessage($scope) {
  return (() => $scope.input_message);
}
_._resume("__tests__/template.marko_0/getMessage", $getMessage);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);