// template.marko
const $await_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $await_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content2__$params);
const $await_content__q = _fill_let("a5", 4, ($scope) => $await_content__await_promise($scope, $scope.e));
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__n = /*@__PURE__*/ _if_closure_patch("a10", 2, 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.g)));
const $n = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__n($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
