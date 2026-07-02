// template.marko
const $double = ($scope, double) => _text($scope.b, double);
const $count = /* @__PURE__ */ _let(2, ($scope) => $double($scope, $scope.c * 2));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
