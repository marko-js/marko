// tags/my-input.marko
const $input__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "a", $scope.d));
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	$input__render($scope);
	$input_value($scope, $scope.d.value);
	$input__script($scope);
});
const $input_value = /*@__PURE__*/ _render(($scope, input_value) => _text($scope.b, input_value));

// template.marko
const $value = /*@__PURE__*/ _let(1, ($scope) => $input($scope.a, {
	value: $scope.b,
	valueChange: $valueChange($scope)
}));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
