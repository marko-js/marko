// total: 3965 (min) 1833 (brotli)
// template.marko: 168 (min) 116 (brotli)
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
