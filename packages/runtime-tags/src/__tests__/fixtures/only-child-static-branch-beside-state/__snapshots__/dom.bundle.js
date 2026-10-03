// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.b, $scope._.k));
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.k));
const $for2 = /*@__PURE__*/ _for_until_unkeyed(4, "x");
const $count = /*@__PURE__*/ _let(10, ($scope) => {
	_attr_class($scope.a, `c${$scope.k}`);
	_attr_class($scope.b, `c${$scope.k}`);
	_attr_class($scope.c, `c${$scope.k}`);
	_text($scope.d, $scope.k);
	$for2($scope, [
		$scope.k,
		0,
		1
	]);
	$if_content__count($scope);
	$for_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$count($scope, +$scope.k + 1);
}));
