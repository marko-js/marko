// tags/countdown.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e));
const $if_content__child = _var_resume("b0", ($scope, child) => _text($scope.c, child));
const $input_label = /*@__PURE__*/ _const(4, ($scope) => {
	_return($scope, $scope.e);
	$if_content__input_label($scope);
});

// template.marko
const $label = /*@__PURE__*/ _let(4, ($scope) => {
	$input_label($scope.b, $scope.e);
	_text($scope.d, $scope.e);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$label($scope, $scope.e + "a");
}));
