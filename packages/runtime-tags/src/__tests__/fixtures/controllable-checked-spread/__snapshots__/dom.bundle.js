// tags/checkbox.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs($scope, "a", {
		type: "checkbox",
		...$scope.c
	});
	$input__script($scope);
});

// template.marko
const $checked = /*@__PURE__*/ _let(2, ($scope) => {
	$input($scope.a, {
		checked: $scope.c,
		checkedChange: $checkedChange($scope)
	});
	_text($scope.b, String($scope.c));
});
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("a0", $checkedChange);
