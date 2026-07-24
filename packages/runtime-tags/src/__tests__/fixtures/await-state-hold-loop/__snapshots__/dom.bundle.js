// template.marko
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $for_content__n = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.b, $scope._.d));
const $for_content__setup = $for_content__n;
const $for_content__i = ($scope, i) => _text($scope.a, i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(1, "<li>item <!> of <!></li>", "Db%c%l", $for_content__setup, $for_content__$params);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$for($scope, [Array.from({ length: $scope.d }, (_, i) => i)]);
	$await_promise($scope, resolveAfter($scope.d));
	$for_content__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
