// template.marko
const $n = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$n($scope, $scope.d + 1);
	});
	_attr_input_value_script($scope, "c");
});
