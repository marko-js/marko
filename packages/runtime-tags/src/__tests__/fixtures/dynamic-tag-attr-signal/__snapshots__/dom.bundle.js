// template.marko
const $className = /* @__PURE__ */ _let(2, ($scope) => _attr_class($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$className($scope, $scope.c === "A" ? "B" : "A");
}));
