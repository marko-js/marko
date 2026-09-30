// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.g));
const $for = /*@__PURE__*/ _for_until_unkeyed(1, " ", " ", $for_content__setup);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_attr_class($scope.a, `c${$scope.g}`);
	$for($scope, [
		$scope.g,
		0,
		1
	]);
	$if_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
