// template.marko
const $a = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c.join("")));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c.map((a) => $scope.d));
}));
