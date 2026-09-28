// template.marko
const $clickCount__script = _script("a1", ($scope) => document.getElementById("button").textContent = $scope.b);
const $clickCount = /*@__PURE__*/ _let(1, $clickCount__script);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope, +$scope.b + 1);
}));
