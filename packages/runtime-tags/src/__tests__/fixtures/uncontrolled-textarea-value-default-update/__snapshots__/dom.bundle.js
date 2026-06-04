// total: 3813 (min) 1804 (brotli)
// template.marko: 288 (min) 124 (brotli)
const $value = /* @__PURE__ */ _let(7, ($scope) => {
	_attr_input_value_default($scope, "c", $scope.h);
	_attr_input_value_default($scope, "d", $scope.h);
	_attr_input_value($scope, "e", $scope.h, void 0);
	_attr_input_value($scope, "f", $scope.h, void 0);
});
const $setup__script = _script("a0", ($scope) => {
	_attr_input_value_script($scope, "e");
	_attr_input_value_script($scope, "f");
	_on($scope.g, "click", function() {
		$value($scope, "b");
	});
});
