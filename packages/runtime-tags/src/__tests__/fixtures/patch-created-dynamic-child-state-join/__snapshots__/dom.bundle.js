// tags/child/index.marko
const $input_x__OR__n__script = _script("b1", ($scope) => document.title = $scope.e + $scope.f);
const $input_x__OR__n = /*@__PURE__*/ _shell_or("b2", 6, $input_x__OR__n__script);
const $n = /*@__PURE__*/ _fill_let("b3", 5, $input_x__OR__n);
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
