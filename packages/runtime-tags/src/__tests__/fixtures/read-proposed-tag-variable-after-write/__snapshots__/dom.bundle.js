// template.marko
const $clickCount = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.innerHTML = $clickCount($scope, $scope.e + 1) - 1;
	$scope.d.innerHTML = $scope.e;
}));
