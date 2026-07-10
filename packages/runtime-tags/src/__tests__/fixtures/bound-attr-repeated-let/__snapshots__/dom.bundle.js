// template.marko
const $x__OR__$valueChange = /*@__PURE__*/ _or(7, ($scope) => {
	_attr_input_value($scope, "c", "f" in $scope ? $scope.f : "start", $scope.g);
	_attr_input_value($scope, "d", "f" in $scope ? $scope.f : "start", $scope.g);
	_attr_input_value($scope, "e", "f" in $scope ? $scope.f : "start", $scope.g);
});
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$x__OR__$valueChange($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$x($scope, ("f" in $scope ? $scope.f : "start") + "!");
	});
	_attr_input_value_script($scope, "c");
	_attr_input_value_script($scope, "d");
	_attr_input_value_script($scope, "e");
});
function $valueChange2($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("a0", $valueChange2);
