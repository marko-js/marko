// template.marko
const $attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $attrs = /*@__PURE__*/ _const(4, ($scope) => {
	_attrs_partial($scope, "a", $scope.e, { type: 1 }, _controllable_input);
	$attrs__script($scope);
});
const $sel = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d.join(","));
	$attrs($scope, {
		checkedValue: $scope.d,
		value: "a"
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$sel($scope, $scope.d.slice());
}));
