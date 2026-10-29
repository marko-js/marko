// template.marko
const $if_content__b = /*@__PURE__*/ _let(2, ($scope) => _text($scope.a, $scope.$.g + $scope.c));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.c + 1);
}));
