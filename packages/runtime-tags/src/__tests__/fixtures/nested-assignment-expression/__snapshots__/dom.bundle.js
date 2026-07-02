// template.marko
const $clickCount = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
const $lastCount = /* @__PURE__ */ _let(5, ($scope) => _text($scope.c, $scope.f));
const $lastCount2 = /* @__PURE__ */ _let(6, ($scope) => _text($scope.d, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$lastCount2($scope, $lastCount($scope, $clickCount($scope, $scope.e + 1) - 1));
}));
