// total: 8840 (min) 3350 (brotli)
// tags/radio.marko: 38 (min) 42 (brotli)
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs($scope, "a", {
		type: "radio",
		...$scope.c
	});
	$input__script($scope);
});

// template.marko: 296 (min) 137 (brotli)
const $checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(6, ($scope) => {
	$input($scope.a, {
		checkedValue: $scope.e,
		checkedValueChange: $scope.f,
		value: "a"
	});
	$input($scope.b, {
		checkedValue: $scope.e,
		checkedValueChange: $scope.f,
		value: "b"
	});
	$input($scope.c, {
		checkedValue: $scope.e,
		checkedValueChange: $scope.f,
		value: "c"
	});
});
const $checkedValue = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$checkedValue__OR__$checkedValueChange($scope);
});
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("a0", $checkedValueChange2);
