// template.marko
const $pick__script = _script("a3", ($scope) => console.log("run", $scope.j()));
const $pick = /*@__PURE__*/ _const(9, ($scope) => {
	_text($scope.a, $scope.j());
	$pick__script($scope);
});
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $pick($scope, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
