// template.marko
function getStringBy() {
	return "id";
}
function getFunctionBy() {
	return (item) => item.id;
}
const $for_content5__text = ($scope, text) => _text($scope.a, text);
const $for_content5__$params = ($scope, $params6) => $for_content5__$temp($scope, $params6?.[0]);
const $for_content5__$temp = ($scope, $temp5) => $for_content5__text($scope, $temp5.text);
const $for_content4__text = ($scope, text) => _text($scope.a, text);
const $for_content4__$params = ($scope, $params5) => $for_content4__$temp($scope, $params5?.[0]);
const $for_content4__$temp = ($scope, $temp4) => $for_content4__text($scope, $temp4.text);
const $for_content3__text = ($scope, text) => _text($scope.a, text);
const $for_content3__$params = ($scope, $params4) => $for_content3__$temp($scope, $params4?.[0]);
const $for_content3__$temp = ($scope, $temp3) => $for_content3__text($scope, $temp3.text);
const $for_content2__text = ($scope, text) => _text($scope.a, text);
const $for_content2__$params = ($scope, $params3) => $for_content2__$temp($scope, $params3?.[0]);
const $for_content2__$temp = ($scope, $temp2) => $for_content2__text($scope, $temp2.text);
const $for_content__text = ($scope, text) => _text($scope.a, text);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__text($scope, $temp.text);
const $for = /*@__PURE__*/ _for_of(0, " ", " b", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of(1, " ", " b", 0, $for_content2__$params);
const $for3 = /*@__PURE__*/ _for_of(2, " ", " b", 0, $for_content3__$params);
const $for4 = /*@__PURE__*/ _for_of(3, " ", " b", 0, $for_content4__$params);
const $for5 = /*@__PURE__*/ _for_of(4, " ", " b", 0, $for_content5__$params);
const $items__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$items($scope, [...$scope.g.slice(1), $scope.g?.[0]]);
}));
const $items = /*@__PURE__*/ _let(6, ($scope) => {
	$for($scope, [$scope.g, "id"]);
	$for2($scope, [$scope.g, (item) => item.id]);
	$for3($scope, [$scope.g, getStringBy()]);
	$for4($scope, [$scope.g, getFunctionBy()]);
	$for5($scope, [$scope.g, void 0]);
	$items__script($scope);
});
