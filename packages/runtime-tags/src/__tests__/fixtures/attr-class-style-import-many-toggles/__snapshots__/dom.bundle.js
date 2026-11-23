// template.marko
const $on = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_class_names($scope.a, "x", $scope.c);
	_attr_class_items($scope.a, {
		a: $scope.c,
		b: $scope.c,
		c: $scope.c,
		d: $scope.c
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.c);
}));
