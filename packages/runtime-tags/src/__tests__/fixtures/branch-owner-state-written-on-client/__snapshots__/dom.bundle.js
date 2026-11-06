// template.marko
const $for_content2__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__count = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.b, $scope._.i), 9);
const $if_content2__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => {
	_text($scope.a, $scope._.i);
	_text($scope.b, $scope._.i);
});
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.i));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.i + 1);
}));
const $for2 = /*@__PURE__*/ _for_until_unkeyed(3, " ", " ", $for_content2__setup);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_attr_class($scope.a, `c${$scope.i}`);
	_attr_class($scope.b, `c${$scope.i}`);
	_attr_class($scope.c, `c${$scope.i}`);
	$for2($scope, [$scope.i]);
	$if_content__count($scope);
	$if_content2__count($scope);
	$for_content__count($scope);
});
