// template.marko
const $on = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_class($scope.b, ["a  b ", $scope.f ? "on" : " d  e "]);
	_attr_class($scope.c, ["f", $scope.f ? "g  h" : "i"]);
	_attr_class_names($scope.d, "p q", $scope.f);
	_attr_style($scope.e, { "color ": $scope.f && "red" });
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
