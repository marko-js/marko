// tags/inner.marko
const $input__script = _script("b0", ($scope) => $scope.a.textContent = $scope.c.fn());
const $input = /*@__PURE__*/ _const(2, $input__script);

// tags/outer.marko
const $value = fill("c2", /*@__PURE__*/ _let(5, ($scope) => $value_b($scope, $scope.f?.b)));
const $fn2 = ($scope, fn) => $input($scope.b, { fn });
const $value_b = /*@__PURE__*/ _const(6, ($scope) => $fn2($scope, $fn($scope)));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {}));
const $fn = ($scope) => function() {
	return $scope.g;
};
_resumed.c0 = $fn;
