// template.marko
const $html = /*@__PURE__*/ _let(8, ($scope) => _html($scope, $scope.i, "c"));
const $attrs__script = _script("a1", ($scope) => {
	_attrs_script($scope, "a");
	_attrs_script($scope, "b");
});
const $attrs = /*@__PURE__*/ _let(9, ($scope) => {
	_attrs_partial_content($scope, "a", $scope.j, { id: 1 });
	_attrs_partial($scope, "b", $scope.j, { name: 1 }, _controllable_input);
	$attrs__script($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$html($scope, "<i>b</i>");
	$attrs($scope, { title: "b" });
}));
