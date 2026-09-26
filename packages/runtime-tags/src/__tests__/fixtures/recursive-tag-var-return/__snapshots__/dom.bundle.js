// tags/rec.marko
const $if_content__child = _var_resume("b0", ($scope, child) => _text($scope.c, child));
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	_return($scope, $scope.g);
});
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
