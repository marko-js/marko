// template.marko
const $if_content__y__script = _script("a2", ($scope) => $scope.a.dataset.y = String($scope.e));
const $if_content__y = _let(4, $if_content__y__script);
const $if_content__x__$global_n = /*@__PURE__*/ _fill_global("a0", ($scope) => $if_content__y($scope, $scope.d + $scope.$.n), "n");
const $if_content__x = /*@__PURE__*/ _fill_let("a3", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$if_content__x__$global_n($scope);
});
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, +$scope.d + 1);
	$scope.a.title = String($scope.e);
}));
