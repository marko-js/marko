// template.marko
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $show = /*@__PURE__*/ _show(2);
const $open = /*@__PURE__*/ _let(4, ($scope) => $show($scope, $scope.e));
const $for = /*@__PURE__*/ _for_of_unkeyed(3, "<li> </li>", "D ", 0, $for_content__$params);
const $results = /*@__PURE__*/ _let(5, ($scope) => {
	$results_length($scope, $scope.f?.length);
	$for($scope, [$scope.f]);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$open($scope, !$scope.e);
	});
	_on($scope.b, "click", function() {
		$results($scope, $scope.g > 1 ? ["c"] : ["d", "e"]);
	});
});
const $results_length = /*@__PURE__*/ _const(6);
