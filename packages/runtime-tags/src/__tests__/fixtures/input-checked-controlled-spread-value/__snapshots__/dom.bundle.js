// template.marko
const $input_rest__OR__checked__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $input_rest__OR__checked = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs($scope, "a", {
		type: "radio",
		checked: $scope.e,
		checkedChange: $checkedChange($scope),
		value: "x",
		...$scope.d
	}, _controllable_input);
	$input_rest__OR__checked__script($scope);
});
const $checked = /*@__PURE__*/ _let(4, $input_rest__OR__checked);
const $checkedChange = ($scope) => (_new_checked) => {
	$checked($scope, _new_checked);
};
_resume("a0", $checkedChange);
