// template.marko
const $a__OR__b = /* @__PURE__ */ _or(4, ($scope) => _text($scope.b, $scope.c + $scope.d));
const $a = /* @__PURE__ */ _let(2, $a__OR__b);
const $b = /* @__PURE__ */ _let(3, $a__OR__b);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c + 1);
	$b($scope, $scope.d + 1);
}));
