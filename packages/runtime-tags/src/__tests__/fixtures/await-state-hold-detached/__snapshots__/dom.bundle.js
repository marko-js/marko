// template.marko
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(6, $await_content__$params);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	_text($scope.e, $scope.h);
	$await_promise($scope, resolveAfter($scope.h));
});
const $show = /*@__PURE__*/ _show(5, 3);
const $shown = /*@__PURE__*/ _let(8, ($scope) => $show($scope, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$n($scope, $scope.h + 1);
	});
	_on($scope.b, "click", function() {
		$shown($scope, !$scope.i);
	});
});
