// tags/child/index.marko
const $input_x__OR__n__script = _script("b3", ($scope) => console.log(`effect ${$scope.f}:${$scope.g}`));
const $input_x__OR__n = /*@__PURE__*/ _or_resume("b6", 7, $input_x__OR__n__script);
const $n = /*@__PURE__*/ _fill_let("b5", 6, $input_x__OR__n);
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
