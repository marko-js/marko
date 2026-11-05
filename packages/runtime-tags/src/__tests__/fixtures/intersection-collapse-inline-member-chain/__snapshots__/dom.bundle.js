// template.marko
const $count__OR__half = ($scope) => _text($scope.b, $scope.c + ($scope.c + .5).toFixed(1) + ($scope.c + .5).constructor.name);
const $count = /*@__PURE__*/ _let(2, $count__OR__half);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
