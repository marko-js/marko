// template.marko
const $linked = /*@__PURE__*/ _let(3, ($scope) => {
	_attr_ns($scope.a, "xlink:href", $scope.d && "#a", "http://www.w3.org/1999/xlink");
	_attr_ns($scope.a, "xml:lang", $scope.d && "en", "http://www.w3.org/XML/1998/namespace");
	_attr_ns($scope.b, "xml:lang", $scope.d ? "en" : "fr", "http://www.w3.org/XML/1998/namespace");
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$linked($scope, !$scope.d);
}));
