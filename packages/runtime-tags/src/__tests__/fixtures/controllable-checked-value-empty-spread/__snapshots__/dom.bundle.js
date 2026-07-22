// template.marko
const $v__OR__rest__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "b", {
	type: "checkbox",
	checkedValue: $scope.d,
	value: "",
	...$scope.e
}));
const $v__OR__rest__script = _script("a0", ($scope) => _attrs_script($scope, "b"));
const $v__OR__rest = /*@__PURE__*/ _or(5, ($scope) => {
	$v__OR__rest__render($scope);
	$v__OR__rest__script($scope);
});
const $v__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d === void 0 ? "undefined" : "value=" + $scope.d));
const $v = /*@__PURE__*/ _let(3, ($scope) => {
	$v__render($scope);
	$v__OR__rest($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$v($scope, $scope.d === "" ? "x" : "");
}));
