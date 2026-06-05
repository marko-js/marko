// tags/counter.marko
const $x__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.c + 1);
}));
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
	$x__script($scope);
});
function $valueChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("b0", $valueChange);

// template.marko
const $count = _var_resume("a0", ($scope, count) => {});
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope["Aa"], 0);
}));
