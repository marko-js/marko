// template.marko
const $if_content__y__script = _script("a1", ($scope) => $scope.a.dataset.y = String($scope.e));
const $if_content__y = _fill_let("a2", 4, $if_content__y__script);
const $if_content__x = _let(3, ($scope) => {
	$if_content__y($scope, $scope.d);
	_text($scope.b, $scope.d);
});
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$scope.a.title = String($scope.e);
}));
