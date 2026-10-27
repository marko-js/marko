// template.marko
const $out = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$out($scope, [...$scope.g].join(","));
}));
