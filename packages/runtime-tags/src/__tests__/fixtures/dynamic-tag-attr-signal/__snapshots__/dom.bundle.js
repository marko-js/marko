// total: 2750 (min) 1399 (brotli)
// template.marko: 118 (min) 99 (brotli)
const $className__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$className($scope, $scope.c === "A" ? "B" : "A");
}));
const $className = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_class($scope.a, $scope.c);
	$className__script($scope);
});
