// template.marko
const $if_content2__y__script = _script("a1", ($scope) => $scope.a.dataset.y = String($scope.c));
const $if_content2__y = _let(2, $if_content2__y__script);
const $if_content2__x = /*@__PURE__*/ _if_closure_patch("a8", 2, 0, ($scope) => $if_content2__y($scope, $scope._.d));
const $if_content2__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$scope.a.title = String($scope.c);
}));
const $if_content__x = /*@__PURE__*/ _fill_let("a6", 3, ($scope) => {
	_text($scope.b, $scope.d);
	$if_content2__x($scope);
});
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$if_content__x($scope, +$scope.d + 1);
}));
