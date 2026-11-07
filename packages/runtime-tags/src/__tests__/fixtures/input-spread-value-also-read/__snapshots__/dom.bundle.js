// tags/my-input.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs($scope, "a", $scope.d, _controllable_input);
	_text($scope.b, $scope.d.value);
	$input__script($scope);
});

// template.marko
const $value = /*@__PURE__*/ _let(1, ($scope) => $input($scope.a, {
	value: $scope.b,
	valueChange: $valueChange($scope)
}));
const $valueChange = ($scope) => (_new_value) => $value($scope, _new_value);
_resumed.a0 = $valueChange;
