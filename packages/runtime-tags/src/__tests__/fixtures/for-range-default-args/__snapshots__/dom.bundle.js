// template.marko
const $for_content4__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content3__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content2__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_to_unkeyed(1, " ", " ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_to_unkeyed(2, " ", " ", $for_content2__setup);
const $for3 = /*@__PURE__*/ _for_until_unkeyed(3, " ", " ", $for_content3__setup);
const $for4 = /*@__PURE__*/ _for_to(4, " ", " ", $for_content4__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	$for($scope, [$scope.f]);
	$for2($scope, [$scope.f, 1]);
	$for3($scope, [
		$scope.f,
		0,
		2
	]);
	$for4($scope, [
		$scope.f,
		0,
		0,
		(n) => n
	]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
