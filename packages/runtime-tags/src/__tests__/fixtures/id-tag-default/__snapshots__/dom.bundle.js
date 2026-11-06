// template.marko
const $bar = /*@__PURE__*/ _let(4, ($scope) => _attr($scope.c, "id", $scope.e || _id($scope, "Jh")));
const $baz = /*@__PURE__*/ _let(5, ($scope) => _attr($scope.d, "id", $scope.f || _id($scope, "Ji")));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$bar($scope, $scope.e ? null : "bar");
	$baz($scope, $scope.f ? null : "baz");
}));
