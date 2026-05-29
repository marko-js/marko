// total: 3968 (min) 1876 (brotli)
// template.marko: 183 (min) 110 (brotli)
const $value = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_input_value_default($scope, "a", $scope.d);
	_attr_input_value($scope, "b", $scope.d, void 0);
});
const $setup__script = _script("a0", ($scope) => {
	_attr_input_value_script($scope, "b");
	_on($scope.c, "click", function() {
		$value($scope, "b");
	});
});
