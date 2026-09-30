// template.marko
const $if_content__child = _var_resume("a0", ($scope, child) => _text($scope.c, child));
const $Rec_content__n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	_return($scope, $scope.g);
});
const $Rec_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$Rec_content__n($scope, +$scope.g + 1);
}));
