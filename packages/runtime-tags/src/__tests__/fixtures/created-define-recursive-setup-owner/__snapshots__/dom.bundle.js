// template.marko
const $Card_content__x = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $Card_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$Card_content__x($scope, +$scope.i + 1);
}));
