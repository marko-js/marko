// tags/mixer/index.marko
const $input_value__OR__local = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _fill_join("b0", 3, /*@__PURE__*/ _or(5, ($scope) => _return($scope, $scope.d + $scope.e))));
const $local = /*@__PURE__*/ _fill_let("b1", 4, $input_value__OR__local);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$local($scope, +$scope.e + 1);
}));

// template.marko
const $v = _var_resume("a0", ($scope, v) => _text($scope.c, v));
