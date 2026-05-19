// total: 2544 (min) 1321 (brotli)
// template.marko: 134 (min) 104 (brotli)
const $clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.innerHTML = $clickCount($scope, $scope.e + 1) - 1;
	$scope.d.innerHTML = $scope.e;
}));
const $clickCount = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$clickCount__script($scope);
});
