// template.marko
const $input_label__OR__count = /*@__PURE__*/ _or(6, _script("a1", ($scope) => $scope.a.textContent = `${$scope.e}:${$scope.f}`));
const $count = /*@__PURE__*/ _let(5, $input_label__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
