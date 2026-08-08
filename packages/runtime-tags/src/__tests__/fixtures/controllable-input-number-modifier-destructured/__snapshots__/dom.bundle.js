// tags/my-input.marko
function num(v) {
	return +v;
}
const $input_countChange__OR__input_count = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "a", $scope.e, $scope.d && $valueChange($scope)));
const $count = /*@__PURE__*/ _const(4, $input_countChange__OR__input_count);
const $setup__script = _script("b1", ($scope) => _attr_input_value_script($scope, "a"));
const $valueChange = ($scope) => ($next) => {
	$scope.d(num($next));
};
_resume("b0", $valueChange);

// template.marko
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$count($scope.a, $scope.d);
	_text($scope.b, $scope.d);
	_text($scope.c, typeof $scope.d);
});
const $countChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resume("a0", $countChange);
