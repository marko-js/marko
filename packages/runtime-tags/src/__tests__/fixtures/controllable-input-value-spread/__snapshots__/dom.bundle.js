// total: 8733 (min) 3330 (brotli)
// tags/my-input.marko: 38 (min) 42 (brotli)
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs($scope, "a", $scope.c);
	$input__script($scope);
});

// template.marko: 138 (min) 107 (brotli)
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	$input($scope.a, {
		type: "text",
		value: $scope.c,
		valueChange: $valueChange($scope)
	});
	_text($scope.b, $scope.c);
});
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
