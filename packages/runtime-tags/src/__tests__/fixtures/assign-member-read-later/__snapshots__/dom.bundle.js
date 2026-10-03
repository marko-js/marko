// template.marko
const $live_nested__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$log($scope, `${$scope.d.open} ${$scope.e.depth} ${$scope.f.count} ${$scope.d.open}`);
}));
const $log = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.d.open = true;
	$scope.d.nested.depth = 2;
	$scope.f.count++;
}));
