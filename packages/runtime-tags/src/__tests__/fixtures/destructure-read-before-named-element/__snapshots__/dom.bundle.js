// template.marko
const $list = /*@__PURE__*/ _let(5, ($scope) => {
	$more($scope, (([, , ...more]) => more)($scope.f));
	$list_($scope, $scope.f[1]);
});
const $more = /*@__PURE__*/ _const(7, ($scope) => $more_length($scope, $scope.h.length));
const $more_length = /*@__PURE__*/ _const(8, ($scope) => _text($scope.d, $scope.i));
const $list_ = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.a, $scope.g);
	$second($scope, $scope.g);
});
const $second = ($scope) => _text($scope.c, $scope.g);
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$list($scope, [
		4,
		5,
		6,
		7
	]);
}));
