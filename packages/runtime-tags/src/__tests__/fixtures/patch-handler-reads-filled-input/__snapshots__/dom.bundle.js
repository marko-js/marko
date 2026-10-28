// template.marko
const $input_label__OR__n = /*@__PURE__*/ _fill_signal("4 a1", /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.f + $scope.e)));
const $n = /*@__PURE__*/ _let(5, $input_label__OR__n);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
	document.title = $scope.e;
}));
