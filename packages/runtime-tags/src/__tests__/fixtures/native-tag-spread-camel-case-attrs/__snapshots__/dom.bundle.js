// template.marko
const $rest__script = _script("a0", ($scope) => {
	_attrs_script($scope, "b");
	_attrs_script($scope, "c");
});
const $rest = /*@__PURE__*/ _let(6, ($scope) => {
	_attrs_partial($scope, "b", $scope.g, {
		tabIndex: 1,
		tabindex: 1,
		readOnly: 1,
		readonly: 1
	});
	_attrs_partial_content($scope, "c", $scope.g, {
		tabIndex: 1,
		tabindex: 1,
		viewBox: 1,
		viewbox: 1
	});
	$rest__script($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$rest($scope, {
		"aria-label": "b",
		tabIndex: 5
	});
}));
