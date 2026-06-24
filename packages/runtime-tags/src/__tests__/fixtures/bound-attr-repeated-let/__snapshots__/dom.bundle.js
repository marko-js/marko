// template.marko
const $x__OR__$valueChange = /*@__PURE__*/ _or(7, ($scope) => {
	_attr_input_value($scope, "c", $scope.f, $scope.g);
	_attr_input_value($scope, "d", $scope.f, $scope.g);
	_attr_input_value($scope, "e", $scope.f, $scope.g);
});
const $x__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.f + "!");
}));
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$x__OR__$valueChange($scope);
	$x__script($scope);
});
const $setup__script = _script("a1", ($scope) => {
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
