// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d + $scope.$.brand));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.d + 1);
	});
	$scope.c.textContent = JSON.stringify($scope.$);
});
