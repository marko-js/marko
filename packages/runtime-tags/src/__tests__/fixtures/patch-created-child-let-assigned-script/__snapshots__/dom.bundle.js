// tags/probe.marko
const $doubled = /*@__PURE__*/ _const(2);
const $count__OR__doubled = _script("b1", ($scope) => document.body.dataset.count = String($scope.b + 1) + "/" + $scope.c);
const $count = /*@__PURE__*/ _fill_let("b2", 1, ($scope) => {
	$doubled($scope, $scope.b * 2);
	$count__OR__doubled($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.b + 1);
}));
