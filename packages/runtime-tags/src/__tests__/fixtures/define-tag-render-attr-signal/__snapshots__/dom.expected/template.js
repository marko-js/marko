const $MyTag_content__walks = /* next(1), get, out(1) */"D l",
  $MyTag_content__template = "<div> </div>";
export const $template = `<!>${$MyTag_content__template}<button> </button>`;
export const $walks = /* over(1), <MyTag>, get, next(1), get, out(1) */`b/${$MyTag_content__walks}& D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyTag_content__number = /* @__PURE__ */_._const("number", $scope => _._text($scope["#text/0"], $scope.number));
const $MyTag_content__$params = /* @__PURE__ */_._const("$params2", $scope => $MyTag_content__$temp($scope, $scope.$params2?.[0]));
const $MyTag_content__$temp = /* @__PURE__ */_._const("$temp", $scope => $MyTag_content__number($scope, $scope.$temp.number));
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/1"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/3", $scope => {
  $MyTag_content__number($scope["#childScope/0"], $scope.x);
  _._text($scope["#text/2"], $scope.x);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);