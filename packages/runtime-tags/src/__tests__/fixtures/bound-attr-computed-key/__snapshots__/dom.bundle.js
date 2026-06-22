// template.marko
const $state3 = /* @__PURE__ */ _const(6, ($scope) => _attr_input_value($scope, "c", $scope.g["v"], $scope.g["vChange"]));
const $v = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.a, $scope.d);
	$state3($scope, {
		v: $scope.d,
		vChange: $state($scope),
		keyChange: $state2($scope)
	});
});
const $wrong = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "c"));
function $state2($scope) {
	return function(x) {
		$wrong($scope, x);
	};
}
function $state($scope) {
	return function(x) {
		$v($scope, x);
	};
}
_resume("a1", $state2);
_resume("a0", $state);
