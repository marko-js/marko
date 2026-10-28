// tags/mid-define.marko
const $Show_content__get__script = _script("b1", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});
const $Show_content__get = /*@__PURE__*/ _const(3, $Show_content__get__script);
const $input_get = ($scope, input_get) => $Show_content__get($scope.a, input_get);

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("a3", 8, ($scope) => $input_get($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_bind_resume("a0 e", $up);
_bind_resume("a1 e", $low);
