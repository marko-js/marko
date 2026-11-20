// template.marko
const $tint = /*@__PURE__*/ _let(3, ($scope) => {
	_attr_style_item($scope.a, "color", $scope.d);
	_attr_style_item($scope.b, "color", $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$tint($scope, $scope.d ? null : "green");
}));
