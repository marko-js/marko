// tags/child.marko
const $input_extra__OR__x = /*@__PURE__*/ _or(6, ($scope) => _return($scope, $scope.f + $scope.e));
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.f));
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$x__render($scope);
	$input_extra__OR__x($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.f + 1);
}));

// template.marko
const $message = /*@__PURE__*/ _render(($scope, message) => _text($scope.c, message));
const $name__OR__data = /*@__PURE__*/ _or(5, ($scope) => $message($scope, `${$scope.d} ${$scope.e}`), 1, 1);
const $data = _var_resume("a0", /*@__PURE__*/ _const(4, $name__OR__data));
