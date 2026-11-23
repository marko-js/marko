// template.marko
const $tint = /*@__PURE__*/ _let(4, ($scope) => {
	_attr_style_item($scope.a, "color", $scope.e);
	_attr_style_item($scope.b, "color", $scope.e);
	_attr_style_item($scope.d, "color", $scope.e);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$tint($scope, $scope.e ? null : "green");
}));
