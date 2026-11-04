// template.marko
const $count__OR__b = /*@__PURE__*/ _or_patch("a1", 7, ($scope) => _text($scope.a, $scope.f + ":" + JSON.stringify($scope.g)));
const $count = _let(5, $count__OR__b);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
