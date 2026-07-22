// template.marko
const $MyTag_content__number = /*@__PURE__*/ _render(($scope, number) => _text($scope.a, number));
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$x__render($scope);
	$MyTag_content__number($scope.a, $scope.d);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
