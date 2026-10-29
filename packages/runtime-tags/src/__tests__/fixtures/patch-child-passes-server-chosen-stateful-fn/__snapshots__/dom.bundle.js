// tags/label-view.marko
const $input__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.c.get();
	console.log("run", $scope.c.get());
});
const $input = /*@__PURE__*/ _const(2, $input__script);

// tags/mid.marko
const $input_get = ($scope, input_get) => $input($scope.a, { get: input_get });

// template.marko
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _fill("a4", 5, /*@__PURE__*/ _or_resume("a5", 10, ($scope) => $input_get($scope.a, $scope.f ? $scope.i : $scope.j), 2));
const $up2 = /*@__PURE__*/ _const(8, $input_upper__OR__up__OR__low);
const $input_title__OR__n = /*@__PURE__*/ _fill("a3", 4, /*@__PURE__*/ _or(7, ($scope) => $up2($scope, $up($scope))));
const $n = _let(6, $input_title__OR__n);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
const $up = ($scope) => () => "U" + $scope.e + $scope.g;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_bind_resume("a1 e", $low);
