// total: 4162 (min) 1929 (brotli)
// template.marko: 212 (min) 115 (brotli)
const $value = /* @__PURE__ */ _let(5, ($scope) => {
	_attr_input_checkedValue_default($scope, "c", $scope.f, "b");
	_attr_input_checkedValue($scope, "d", $scope.f, void 0, "b");
});
const $setup__script = _script("a0", ($scope) => {
	_attr_input_checkedValue_script($scope, "d");
	_on($scope.e, "click", function() {
		$value($scope, "b");
	});
});
