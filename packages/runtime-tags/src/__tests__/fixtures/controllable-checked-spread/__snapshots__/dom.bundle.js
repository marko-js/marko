// total: 8588 (min) 3291 (brotli)
// tags/checkbox.marko: 38 (min) 42 (brotli)
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs($scope, "a", {
		type: "checkbox",
		...$scope.c
	});
	$input__script($scope);
});

// template.marko: 138 (min) 105 (brotli)
const $checked = /* @__PURE__ */ _let(2, ($scope) => {
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
