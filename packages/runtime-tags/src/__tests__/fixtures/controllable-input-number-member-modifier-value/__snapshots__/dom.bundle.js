// total: 4024 (min) 1884 (brotli)
// tags/custom-input.marko: 108 (min) 80 (brotli)
const $input_value__OR__input_valueChange = /* @__PURE__ */ _or(5, ($scope) => _attr_input_value($scope, "a", $scope.d, $scope.e && $valueChange$1($scope)));
const $input_value = /* @__PURE__ */ _const(3, $input_value__OR__input_valueChange);
const $setup__script = _script("b1", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange$1($scope) {
	return ($next) => {
		$scope.e(parseInt($next));
	};
}
_resume("b0", $valueChange$1);

// template.marko: 129 (min) 97 (brotli)
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	$input_value($scope.a, $scope.d);
	_text($scope.b, $scope.d);
	_text($scope.c, typeof $scope.d);
});
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
