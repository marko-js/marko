// tags/card.marko
const $i = fill("b0", /*@__PURE__*/ _let(3, ($scope) => $i_a($scope, $scope.d?.a)));
const $i_a = /*@__PURE__*/ _const(4, ($scope) => $i_a_b($scope, $scope.e?.b));
const $i_a_b = /*@__PURE__*/ _const(5, ($scope) => $i_a_b_fn($scope, $scope.f?.fn));
const $f = ($scope, f) => _text($scope.a, f());
const $i_a_b_fn = /*@__PURE__*/ _const(6, ($scope) => $f($scope, $scope.g));

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope._.f;
};
_resumed.a0 = $fn;
