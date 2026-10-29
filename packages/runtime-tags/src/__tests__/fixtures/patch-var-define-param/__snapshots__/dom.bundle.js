// tags/labeler.marko
const $input_title = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, "[" + $scope.d + "]");
	_text($scope.a, $scope.d);
});

// template.marko
const $Row_content__input_suffix__OR__value = /*@__PURE__*/ _fill("a2", 5, /*@__PURE__*/ _fill_subscribers("a5", 4, /*@__PURE__*/ _or(6, ($scope) => $input_title($scope.a, $scope.f + $scope._.e)), 6, 0));
const $Row_content__label = _var_resume("a0", ($scope, label) => _text($scope.c, label));
const $Row_content__value = /*@__PURE__*/ _const(5, $Row_content__input_suffix__OR__value);
const $n = _let(5, ($scope) => $Row_content__value($scope.a, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
