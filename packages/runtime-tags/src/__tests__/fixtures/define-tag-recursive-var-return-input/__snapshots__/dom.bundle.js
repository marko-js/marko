// template.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Rec_content__tag_input_label($scope.a, $scope._.e));
const $if_content__child = _var_resume("a0", ($scope, child) => _text($scope.c, child));
const $Rec_content__tag_input_label = /*@__PURE__*/ _const(4, ($scope) => {
	_return($scope, $scope.e);
	$if_content__input_label($scope);
});
const $label = /*@__PURE__*/ _let(4, ($scope) => {
	$Rec_content__tag_input_label($scope.b, $scope.e);
	_text($scope.d, $scope.e);
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$label($scope, $scope.e + "a");
}));
