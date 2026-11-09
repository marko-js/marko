// template.marko
const $log = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.d.open = true;
		$scope.d.nested.depth = 2;
		$scope.e.count++;
	});
	_on($scope.b, "click", function() {
		$log($scope, `${$scope.d.open} ${$scope.d.nested.depth} ${$scope.e.count} ${$scope.d.open}`);
	});
});
