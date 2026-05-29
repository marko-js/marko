// total: 2742 (min) 1405 (brotli)
// template.marko: 184 (min) 133 (brotli)
const $sum = ($scope, sum) => _text($scope.b, sum());
const $items__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c?.length]);
}));
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$sum($scope, function sum(i = 0) {
		return i >= $scope.c?.length ? 0 : $scope.c[i] + sum(i + 1);
	});
	$items__script($scope);
});
