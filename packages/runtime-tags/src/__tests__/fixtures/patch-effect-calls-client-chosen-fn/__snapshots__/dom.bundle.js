// template.marko
const $pick__script = _script("a3", ($scope) => {
	$scope.a.textContent = $scope.j();
	console.log("run", $scope.j());
});
const $pick = /*@__PURE__*/ _const(9, $pick__script);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("a4", 8, ($scope) => $pick($scope, $scope.f ? $scope.g : $scope.h), 2);
const $upper = _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_bind_resume("a0 e", $up);
_bind_resume("a1 e", $low);
