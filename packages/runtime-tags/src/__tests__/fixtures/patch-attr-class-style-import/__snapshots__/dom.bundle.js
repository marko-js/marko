// template.marko
const $on = /*@__PURE__*/ _let(10, ($scope) => _attr_class_names($scope.b, "on", $scope.k));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.k);
}));
