// template.marko
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $else_content__n = /*@__PURE__*/ _if_closure(1, 1, ($scope) => _text($scope.a, $scope._.d));
const $else_content__setup = $else_content__n;
const $if_content__n = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d));
const $if = /*@__PURE__*/ _if(1, "<div id=odd>odd <!></div>", "Db%l", $if_content__n, "<div id=even>even <!></div>", "Db%l", $else_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d % 2 ? 0 : 1);
	$await_promise($scope, resolveAfter($scope.d));
	$if_content__n($scope);
	$else_content__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
