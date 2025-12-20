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
const $for_content5__text = ($scope, text) => _._text($scope["#text/0"], text);
const $for_content5__$params = ($scope, $params6) => $for_content5__$temp($scope, $params6?.[0]);
const $for_content5__$temp = ($scope, $temp5) => $for_content5__text($scope, $temp5.text);
const $for_content4__text = ($scope, text) => _._text($scope["#text/0"], text);
const $for_content4__$params = ($scope, $params5) => $for_content4__$temp($scope, $params5?.[0]);
const $for_content4__$temp = ($scope, $temp4) => $for_content4__text($scope, $temp4.text);
const $for_content3__text = ($scope, text) => _._text($scope["#text/0"], text);
const $for_content3__$params = ($scope, $params4) => $for_content3__$temp($scope, $params4?.[0]);
const $for_content3__$temp = ($scope, $temp3) => $for_content3__text($scope, $temp3.text);
const $for_content2__text = ($scope, text) => _._text($scope["#text/0"], text);
const $for_content2__$params = ($scope, $params3) => $for_content2__$temp($scope, $params3?.[0]);
const $for_content2__$temp = ($scope, $temp2) => $for_content2__text($scope, $temp2.text);
const $for_content__text = ($scope, text) => _._text($scope["#text/0"], text);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__text($scope, $temp.text);
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