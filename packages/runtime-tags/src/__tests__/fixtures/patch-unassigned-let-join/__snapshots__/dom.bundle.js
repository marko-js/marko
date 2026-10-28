// template.marko
const $input_w__OR__x = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.g + $scope.f));
const $x = fill("a1", /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.a, $scope.g);
	$input_w__OR__x($scope);
}));
const $input_w = fill("a0", /*@__PURE__*/ _const(5, $input_w__OR__x));
