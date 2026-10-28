// tags/label-view.marko
const $Show_content__get__script = _script("b1", ($scope) => {
	$scope.a.textContent = $scope.h();
	console.log("run", $scope.h());
});
const $Show_content__get = /*@__PURE__*/ _const(7, $Show_content__get__script);
const $Show_content__a__OR__b__OR__flag = /*@__PURE__*/ _or(6, ($scope) => $Show_content__get($scope, $scope.f ? $scope.d : $scope.e), 2);
const $Show_content__a = /*@__PURE__*/ _const(3, $Show_content__a__OR__b__OR__flag);
const $input_a = ($scope, input_a) => $Show_content__a($scope.a, input_a);

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $input_a($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
