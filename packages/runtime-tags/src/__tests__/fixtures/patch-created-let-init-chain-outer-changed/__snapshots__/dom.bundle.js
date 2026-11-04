// template.marko
const $if_content__b = _let(4, ($scope) => _text($scope.c, $scope.e));
const $if_content__s = _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if_content__b($scope, $scope.d);
});
const $if_content__x = /*@__PURE__*/ _if_closure_patch("a4", 2, 0, ($scope) => $if_content__s($scope, $scope._.g));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__s($scope, +$scope.d + 1);
}));
const $x = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__x($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.g + 1);
}));
