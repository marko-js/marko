// template.marko
const $if_content__y__script = _script("a1", ($scope) => $scope.a.dataset.y = String($scope.f));
const $if_content__y = _let(5, $if_content__y__script);
const $if_content__input_a__OR__x = /*@__PURE__*/ _or_patch("a2", 4, ($scope) => $if_content__y($scope, $scope.d + $scope._.e));
const $if_content__x = /*@__PURE__*/ _fill_let("a3", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$if_content__input_a__OR__x($scope);
});
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, +$scope.d + 1);
	$scope.a.title = String($scope.f);
}));
