// template.marko
const $n = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_class_items($scope.a, {
		on: $scope.$.on,
		big: $scope.f > 1
	});
	_attr_style_items($scope.a, {
		color: $scope.$.color,
		order: $scope.f > 9 ? $scope.f : 0
	});
	_text($scope.b, $scope.f);
	_attr_class_items($scope.c, {
		on: $scope.$.on,
		set: $scope.f
	});
	_attr_class_items($scope.d, {
		all: $scope.$,
		set: $scope.f > 0
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$n($scope, +$scope.f + 1);
}));
