// template.marko
const $if_content__s = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Rec_content__input_label($scope.a, $scope._.h));
const $if_content__child = _var_resume("a0", ($scope, child) => _text($scope.c, child));
const $Rec_content__s = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$if_content__s($scope);
});
const $Rec_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$Rec_content__s($scope, +$scope.h + 1);
}));
const $Rec_content__input_label = /*@__PURE__*/ _const(5, ($scope) => _return($scope, $scope.f));
