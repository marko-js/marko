// tags/checkbox.marko
const $input__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "a", {
	type: "checkbox",
	...$scope.c
}));
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input__render($scope);
	$input__script($scope);
});

// template.marko
const $checked__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, String($scope.c)));
const $checked = /*@__PURE__*/ _let(2, ($scope) => {
	$checked__render($scope);
	$input($scope.a, {
		checked: $scope.c,
		checkedChange: $checkedChange($scope)
	});
});
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("a0", $checkedChange);
