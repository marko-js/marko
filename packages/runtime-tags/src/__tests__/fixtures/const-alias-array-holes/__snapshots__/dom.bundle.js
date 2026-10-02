// template.marko
const $list = /*@__PURE__*/ _let(4, ($scope) => {
	$more($scope, (([, , , ...more]) => more)($scope.e));
	$first($scope, $scope.e[0]);
	$third($scope, $scope.e[2]);
});
const $more = /*@__PURE__*/ _const(7, ($scope) => $more_length($scope, $scope.h.length));
const $more_length = /*@__PURE__*/ _const(8, ($scope) => _text($scope.c, $scope.i));
const $first = /*@__PURE__*/ _const(5, ($scope) => _text($scope.a, $scope.f));
const $third = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$list($scope, [
		4,
		5,
		6,
		7
	]);
}));
