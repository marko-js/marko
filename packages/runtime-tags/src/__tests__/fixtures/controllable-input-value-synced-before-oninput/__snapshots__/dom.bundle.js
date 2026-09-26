// template.marko
const $q = /*@__PURE__*/ _let(2, ($scope) => _attr_input_value($scope, "b", $scope.c, $valueChange($scope)));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "input", function() {});
	_attr_input_value_script($scope, "b");
	_on($scope.b, "input", function() {
		console.log("q=" + $scope.c);
	});
});
const $valueChange = ($scope) => (_new_q) => {
	$q($scope, _new_q);
};
_resumed.a0 = $valueChange;
