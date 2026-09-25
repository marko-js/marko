// template.marko
const $await_content2__v = ($scope, v) => _text($scope.a, v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $placeholder_content = /*@__PURE__*/ _content("a2", "loading button");
pendingEnabled && (_resumed.a2 = $placeholder_content);
const $await_content__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._._.c), ($scope) => $scope._._, "a1", 2);
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$value($scope._._, +$scope._._.c + 1);
}));
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content2__$params);
const $value__closure = /*@__PURE__*/ _closure($await_content__value);
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	$await_promise($scope, $scope.c ? $scope.c : resolveAfter($scope.c, 3));
	$value__closure($scope);
});
