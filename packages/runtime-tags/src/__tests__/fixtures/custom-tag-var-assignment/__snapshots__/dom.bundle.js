// total: 2843 (min) 1422 (brotli)
// tags/counter.marko: 164 (min) 127 (brotli)
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

// template.marko: 195 (min) 118 (brotli)
const $count__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, $scope.f + 1);
}));
const $count = _var_resume("a0", /* @__PURE__ */ _const(5, ($scope) => {
	_text($scope.d, $scope.f);
	$count__script($scope);
}));
const $setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	_var_change($scope.a, 0);
}));
