// template.marko
const $if_content__z__script = _script("a1", ($scope) => $scope.a.dataset.z = String($scope.f));
const $if_content__z = _let(5, $if_content__z__script);
const $if_content__y = _let(4, ($scope) => $if_content__z($scope, $scope.e));
const $if_content__x = /*@__PURE__*/ _fill_let("a2", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$if_content__y($scope, $scope.d);
});
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, +$scope.d + 1);
	$scope.a.title = String($scope.f);
}));
