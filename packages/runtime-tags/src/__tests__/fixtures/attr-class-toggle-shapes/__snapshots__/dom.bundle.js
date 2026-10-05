// template.marko
const $on = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_class_item($scope.b, "d", $scope.f);
	_attr_class_item($scope.c, "e", $scope.f);
	_attr_class($scope.d, ["f", $scope.f ? "g" : "h"]);
	_attr_class_names($scope.e, "j k", $scope.f);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
