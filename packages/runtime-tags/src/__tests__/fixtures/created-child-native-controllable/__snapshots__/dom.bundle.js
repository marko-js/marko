// tags/field.marko
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "a", $scope.d, $scope.e));
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__input_valueChange);
const $setup__script = _script("b0", ($scope) => _attr_input_value_script($scope, "a"));

// tags/page-b.marko
const $text = /*@__PURE__*/ _let(2, ($scope) => {
	$input_value($scope.a, $scope.c);
	_text($scope.b, $scope.c);
});
const $valueChange = ($scope) => (_new_text) => {
	$text($scope, _new_text);
};
_resumed.c0 = $valueChange;
