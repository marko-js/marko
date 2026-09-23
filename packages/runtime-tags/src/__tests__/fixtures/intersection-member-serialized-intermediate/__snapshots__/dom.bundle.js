// template.marko
const $list__OR__show = /*@__PURE__*/ _or(8, ($scope) => _text($scope.a, $scope.h ? $scope.d.join() : "none"));
const $list = /*@__PURE__*/ _let(3, ($scope) => {
	$list_length($scope, $scope.d?.length);
	$list__OR__show($scope);
});
const $show = /*@__PURE__*/ _const(7, $list__OR__show);
const $list_length__OR__flag = /*@__PURE__*/ _or(6, ($scope) => $show($scope, $scope.e > 1 || $scope.f));
const $list_length = /*@__PURE__*/ _const(4, $list_length__OR__flag);
const $flag = /*@__PURE__*/ _let(5, $list_length__OR__flag);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$list($scope, [...$scope.d]);
	});
	_on($scope.c, "click", function() {
		$flag($scope, !$scope.f);
	});
});
