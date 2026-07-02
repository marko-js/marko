// tags/counter.marko
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
});
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.c + 1);
}));
function $valueChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("b0", $valueChange);

// template.marko
const $count = _var_resume("a0", /* @__PURE__ */ _const(5, ($scope) => _text($scope.d, $scope.f)));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		_var_change($scope.a, $scope.f + 1);
	});
	_on($scope.e, "click", function() {
		_var_change($scope.a, 0);
	});
});
