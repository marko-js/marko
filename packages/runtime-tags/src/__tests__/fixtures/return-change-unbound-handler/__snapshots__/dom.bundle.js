// tags/counter-box/index.marko
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _or(7, ($scope) => _return_change($scope, $scope.g === "a" ? $scope.e : $scope.f), 2);
const $mode = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.a, $scope.g);
	_return($scope, $scope.g);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$mode($scope, "b");
}));

// template.marko
const $count = _var_resume("a0", ($scope, count) => _text($scope.c, count));
