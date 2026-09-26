// template.marko
const $checked__OR__attrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $checked__OR__attrs = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_partial($scope, "a", {
		type: "checkbox",
		...$scope.e,
		checked: $scope.c
	}, { value: 1 }, _controllable_input);
	$checked__OR__attrs__script($scope);
});
const $checked = /*@__PURE__*/ _let(2, $checked__OR__attrs);
const $attrs = /*@__PURE__*/ _const(4, $checked__OR__attrs);
const $name = /*@__PURE__*/ _let(3, ($scope) => $attrs($scope, { name: $scope.d }));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$name($scope, "y");
	$checked($scope, true);
}));
