// tags/label-view.marko
const $input__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.c.get();
	console.log("run", $scope.c.get());
});
const $input = /*@__PURE__*/ _const(2, $input__script);

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("a3", 8, ($scope) => $input($scope.a, { get: $scope.f ? $scope.g : $scope.h }), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_bind_resume("a0 e", $up);
_bind_resume("a1 e", $low);
