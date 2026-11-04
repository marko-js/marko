// tags/label-view.marko
const $get__script = _script("b0", ($scope) => $scope.a.dataset.kind = typeof $scope.e);
const $get = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.b, $scope.e());
	$get__script($scope);
});

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $get($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a0 = $up;
_resumed.a1 = $low;
