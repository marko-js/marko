// tags/child.marko
const $input_x__OR__n__script = _script("b1", ($scope) => console.log("child", $scope.e, $scope.f));
const $input_x__OR__n = /*@__PURE__*/ _or_resume("b3", 6, $input_x__OR__n__script);
const $n = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => {
	_text($scope.b, $scope.f);
	$input_x__OR__n($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
