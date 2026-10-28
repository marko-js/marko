// template.marko
const $input_name__OR__uid = /*@__PURE__*/ _fill_join("a1", 7, /*@__PURE__*/ _or(11, ($scope) => {
	_attr($scope.a, "for", `${$scope.k}-${$scope.h}`);
	_attr($scope.c, "id", `${$scope.k}-${$scope.h}`);
}));
const $uid = fill("a2", /*@__PURE__*/ _const(10, $input_name__OR__uid));
const $shown = /*@__PURE__*/ _let(12, ($scope) => _text($scope.e, $scope.m));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$shown($scope, $scope.k);
}));
