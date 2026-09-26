// template.marko
const $Child_content__value_a__OR__value_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.e + $scope._.f));
const $Child_content__value_a = /*@__PURE__*/ _closure_get(6, $Child_content__value_a__OR__value_b, 0, "b0");
const $Child_content__value_b = /*@__PURE__*/ _closure_get(7, $Child_content__value_a__OR__value_b, 0, "b1");
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$value_a($scope, $scope.d?.a);
	$value_b($scope, $scope.d?.b);
});
const $value_a__closure = /*@__PURE__*/ _closure($Child_content__value_a);
const $value_a__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {
		a: $scope.e + 1,
		b: 1
	});
}));
const $value_a = /*@__PURE__*/ _const(4, ($scope) => {
	$value_a__closure($scope);
	$value_a__script($scope);
});
const $value_b = /*@__PURE__*/ _const(5, /* @__PURE__ */ _closure($Child_content__value_b));
