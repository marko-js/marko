// template.marko
const $sel__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $sel = /*@__PURE__*/ _let(3, ($scope) => {
	_attrs_partial($scope, "a", {
		checkedValue: $scope.d,
		value: "a"
	}, { type: 1 }, _controllable_input);
	_text($scope, "c", $scope.d.join(","));
	$sel__script($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$sel($scope, $scope.d.slice());
}));
