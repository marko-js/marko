// template.marko
const $for_content2__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_until_unkeyed(2, "<li> </li>", "D ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_until(3, "<span> </span>", "D ", $for_content2__setup);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$for($scope, [
		$scope.e,
		0,
		1
	]);
	$for2($scope, [
		$scope.e,
		1,
		1
	]);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.e + 1);
	});
	_on($scope.b, "click", function() {
		$count($scope, 0);
	});
});
