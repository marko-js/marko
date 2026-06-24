// template.marko
const $v__OR__rest__script = _script("a0", ($scope) => _attrs_script($scope, "b"));
const $v__OR__rest = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs($scope, "b", {
		type: "radio",
		checkedValue: $scope.d,
		...$scope.e
	});
	$v__OR__rest__script($scope);
});
const $v__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$v($scope, $scope.d === "a" ? "z" : "a");
}));
const $v = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$v__OR__rest($scope);
	$v__script($scope);
});
