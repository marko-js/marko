export const $template = "<div><div class=by-string></div><div class=by-function></div><div class=by-unknown-string></div><div class=by-unknown-function></div><div class=by-unknown-missing></div><button>Rotate</button></div>";
export const $walks = /* next(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, out(1) */"D b b b b b l";
function getStringBy() {
  return "id";
}
function getFunctionBy() {
  return item => item.id;
}
function getMissingBy() {
  return undefined;
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content5__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/0"], $scope.text));
const $for_content5__$params = /* @__PURE__ */_._const("$params6", $scope => $for_content5__$temp($scope, $scope.$params6?.[0]));
const $for_content5__$temp = /* @__PURE__ */_._const("$temp5", $scope => $for_content5__text($scope, $scope.$temp5.text));
const $for_content4__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/0"], $scope.text));
const $for_content4__$params = /* @__PURE__ */_._const("$params5", $scope => $for_content4__$temp($scope, $scope.$params5?.[0]));
const $for_content4__$temp = /* @__PURE__ */_._const("$temp4", $scope => $for_content4__text($scope, $scope.$temp4.text));
const $for_content3__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/0"], $scope.text));
const $for_content3__$params = /* @__PURE__ */_._const("$params4", $scope => $for_content3__$temp($scope, $scope.$params4?.[0]));
const $for_content3__$temp = /* @__PURE__ */_._const("$temp3", $scope => $for_content3__text($scope, $scope.$temp3.text));
const $for_content2__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/0"], $scope.text));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $for_content2__$temp($scope, $scope.$params3?.[0]));
const $for_content2__$temp = /* @__PURE__ */_._const("$temp2", $scope => $for_content2__text($scope, $scope.$temp2.text));
const $for_content__text = /* @__PURE__ */_._const("text", $scope => _._text($scope["#text/0"], $scope.text));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__$temp($scope, $scope.$params2?.[0]));
const $for_content__$temp = /* @__PURE__ */_._const("$temp", $scope => $for_content__text($scope, $scope.$temp.text));
const $for = /* @__PURE__ */_._for_of("#div/0", " ", /* get, over(1) */" b", 0, $for_content__$params);
const $for2 = /* @__PURE__ */_._for_of("#div/1", " ", /* get, over(1) */" b", 0, $for_content2__$params);
const $for3 = /* @__PURE__ */_._for_of("#div/2", " ", /* get, over(1) */" b", 0, $for_content3__$params);
const $for4 = /* @__PURE__ */_._for_of("#div/3", " ", /* get, over(1) */" b", 0, $for_content4__$params);
const $for5 = /* @__PURE__ */_._for_of("#div/4", " ", /* get, over(1) */" b", 0, $for_content5__$params);
const $items__script = _._script("__tests__/template.marko_0_items", $scope => _._on($scope["#button/5"], "click", function () {
  $items($scope, [...$scope.items.slice(1), $scope.items?.[0]]);
}));
const $items = /* @__PURE__ */_._let("items/6", $scope => {
  $for($scope, [$scope.items, "id"]);
  $for2($scope, [$scope.items, item => item.id]);
  $for3($scope, [$scope.items, getStringBy()]);
  $for4($scope, [$scope.items, getFunctionBy()]);
  $for5($scope, [$scope.items, getMissingBy()]);
  $items__script($scope);
});
export function $setup($scope) {
  $items($scope, [{
    id: 0,
    text: "first"
  }, {
    id: 1,
    text: "second"
  }, {
    id: 2,
    text: "third"
  }]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);