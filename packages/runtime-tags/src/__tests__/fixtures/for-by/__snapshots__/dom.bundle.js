// template.marko
function getStringBy() {
	return "id";
}
function getFunctionBy() {
	return (item) => item.id;
}
const $for_content5__$params = ($scope, $params6) => _text($scope.a, $params6[0].text);
const $for_content4__$params = ($scope, $params5) => _text($scope.a, $params5[0].text);
const $for_content3__$params = ($scope, $params4) => _text($scope.a, $params4[0].text);
const $for_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0].text);
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0].text);
const $for = /*@__PURE__*/ _for_of(0, " ", " ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of(1, " ", " ", 0, $for_content2__$params);
const $for3 = /*@__PURE__*/ _for_of(2, " ", " ", 0, $for_content3__$params);
const $for4 = /*@__PURE__*/ _for_of(3, " ", " ", 0, $for_content4__$params);
const $for5 = /*@__PURE__*/ _for_of(4, " ", " ", 0, $for_content5__$params);
const $items = /*@__PURE__*/ _let(6, ($scope) => {
	$for($scope, [$scope.g, "id"]);
	$for2($scope, [$scope.g, (item) => item.id]);
	$for3($scope, [$scope.g, getStringBy()]);
	$for4($scope, [$scope.g, getFunctionBy()]);
	$for5($scope, [$scope.g, void 0]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$items($scope, [...$scope.g.slice(1), $scope.g[0]]);
}));
