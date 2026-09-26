// template.marko
const $placeholder_content = _content("a2", "loading...");
const $await_content__value_a__OR__value_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.d + $scope._._.e));
const $await_content__value_a = /*@__PURE__*/ _closure_get(5, $await_content__value_a__OR__value_b, ($scope) => $scope._._, "a0");
const $await_content__value_b = /*@__PURE__*/ _closure_get(6, $await_content__value_a__OR__value_b, ($scope) => $scope._._, "a1");
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	$value_a($scope, $scope.c?.a);
	$value_b($scope, $scope.c?.b);
});
const $value_a__closure = /*@__PURE__*/ _closure($await_content__value_a);
const $value_a__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {
		a: $scope.d + 1,
		b: 1
	});
}));
const $value_a = /*@__PURE__*/ _const(3, ($scope) => {
	$value_a__closure($scope);
	$value_a__script($scope);
});
const $value_b = /*@__PURE__*/ _const(4, /* @__PURE__ */ _closure($await_content__value_b));
