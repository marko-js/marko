// template.marko
const $if_content__input_a__OR__x = /*@__PURE__*/ _fill_join_if("a5", 4, /*@__PURE__*/ _or_resume("a7", 5, ($scope) => _text($scope.d, $scope.e + $scope._.e)), 0, 0);
const $if_content__k = /*@__PURE__*/ _const(7);
const $if_content__y__script = _script("a1", ($scope) => $scope.a.dataset.y = String($scope.g));
const $if_content__y = /*@__PURE__*/ _let(6, ($scope) => {
	$if_content__y__script($scope);
	$if_content__k($scope, $scope.g + 1);
});
const $if_content__x = /*@__PURE__*/ _fill_let("a3", 4, ($scope) => {
	$if_content__y($scope, $scope.e);
	$if_content__input_a__OR__x($scope);
});
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$if_content__x($scope, $scope.h + 1);
}));
