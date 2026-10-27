// template.marko
const $Show_content__get__script = _script("a3", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});
const $Show_content__get = /*@__PURE__*/ _const(3, $Show_content__get__script);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $Show_content__get($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
