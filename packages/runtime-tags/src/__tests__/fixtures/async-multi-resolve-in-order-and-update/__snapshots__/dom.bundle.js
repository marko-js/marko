// template.marko
const multiply = (multiplier, n) => resolveAfter(multiplier * n);
const $await_content5__result = ($scope, result) => _text($scope.a, result);
const $await_content5__$params = ($scope, $params6) => $await_content5__result($scope, $params6[0]);
const $await_content4__result = ($scope, result) => _text($scope.a, result);
const $await_content4__$params = ($scope, $params5) => $await_content4__result($scope, $params5[0]);
const $await_content3__result = ($scope, result) => _text($scope.a, result);
const $await_content3__$params = ($scope, $params4) => $await_content3__result($scope, $params4[0]);
const $await_content2__result = ($scope, result) => _text($scope.a, result);
const $await_content2__$params = ($scope, $params3) => $await_content2__result($scope, $params3[0]);
const $await_content__result = ($scope, result) => _text($scope.a, result);
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $await_promise2 = /*@__PURE__*/ _await_promise(4, $await_content2__$params);
const $await_promise3 = /*@__PURE__*/ _await_promise(6, $await_content3__$params);
const $await_promise4 = /*@__PURE__*/ _await_promise(8, $await_content4__$params);
const $await_promise5 = /*@__PURE__*/ _await_promise(10, $await_content5__$params);
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.l + 1);
}));
const $n = /*@__PURE__*/ _let(11, ($scope) => {
	_text($scope.b, $scope.l);
	_text($scope.d, $scope.l);
	_text($scope.f, $scope.l);
	_text($scope.h, $scope.l);
	_text($scope.j, $scope.l);
	$await_promise($scope, multiply(1, $scope.l));
	$await_promise2($scope, multiply(2, $scope.l));
	$await_promise3($scope, multiply(3, $scope.l));
	$await_promise4($scope, multiply(4, $scope.l));
	$await_promise5($scope, multiply(5, $scope.l));
	$n__script($scope);
});
