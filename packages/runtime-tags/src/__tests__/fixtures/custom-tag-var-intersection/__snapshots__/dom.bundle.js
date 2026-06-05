// tags/child.marko
const $input_extra__OR__x = /* @__PURE__ */ _or(6, ($scope) => _return($scope, $scope.f + $scope.e));
const $x__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.f + 1);
}));
const $x = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$input_extra__OR__x($scope);
	$x__script($scope);
});

// template.marko
const $message = ($scope, message) => _text($scope.c, message);
const $name__OR__data = /* @__PURE__ */ _or(5, ($scope) => $message($scope, `${$scope.d} ${$scope.e}`), 1, 1);
const $data = _var_resume("a0", /* @__PURE__ */ _const(4, $name__OR__data));
