// tags/child.marko
const $local = /*@__PURE__*/ _let_change(6, ($scope) => _text($scope.a, $scope.g == null ? "none" : $scope.g));
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => $local($scope, $scope.d, $scope.e));
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__input_valueChange);

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, void 0);
}));
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("a0", $valueChange);
