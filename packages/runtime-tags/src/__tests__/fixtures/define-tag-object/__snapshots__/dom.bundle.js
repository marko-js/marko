// template.marko
const $myObj = /*@__PURE__*/ _render(($scope, myObj) => _text($scope.a, JSON.stringify(myObj)));
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$x__render($scope);
	$myObj($scope, {
		foo: 1,
		bar: $scope.d + 1
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
