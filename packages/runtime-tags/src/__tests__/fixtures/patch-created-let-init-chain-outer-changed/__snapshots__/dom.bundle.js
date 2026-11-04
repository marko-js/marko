// template.marko
const $if_content__b = _let(2, ($scope) => _text($scope.a, $scope.c));
const $if_content__s = _let(1, ($scope) => $if_content__b($scope, $scope.b));
const $if_content__x = /*@__PURE__*/ _if_closure_patch("a3", 2, 0, ($scope) => $if_content__s($scope, $scope._.g));
const $x = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__x($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.g + 1);
}));
