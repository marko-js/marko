// template.marko
const $count__OR__$valueChange = /* @__PURE__ */ _or(5, ($scope) => {
	_attr_input_value($scope, "b", $scope.d, $scope.e);
	_attr_input_value($scope, "c", $scope.d, $scope.e);
});
const $count = /* @__PURE__ */ _let(3, $count__OR__$valueChange);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.d + 1);
	});
	_attr_input_value_script($scope, "b");
	_attr_input_value_script($scope, "c");
});
function $valueChange2($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("a0", $valueChange2);
