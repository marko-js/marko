// template.marko
const $clickCount = /*@__PURE__*/ _let(1, _script("a1", ($scope) => document.getElementById("button").textContent = "b" in $scope ? $scope.b : 0));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope, ("b" in $scope ? $scope.b : 0) + 1);
}));
