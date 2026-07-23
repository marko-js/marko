// template.marko
const $if_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope, "a", $scope._._.d), ($scope) => $scope._._);
const $await_content__if = /*@__PURE__*/ _if(1, "<em>odd <!></em>", "Db%l", $if_content__n);
const $await_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => {
	_text($scope, "a", $scope._.d);
	$await_content__if($scope, $scope._.d % 2 ? 0 : 1);
});
const $await_content__result = ($scope, result) => _text($scope, "c", result);
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
_enable_transition();
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $n__closure = /*@__PURE__*/ _closure($await_content__n, $if_content__n);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope, "b", $scope.d);
	$await_promise($scope, resolveAfter(`R${$scope.d}`));
	$n__closure($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
