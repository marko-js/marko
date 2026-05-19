// total: 2514 (min) 1317 (brotli)
// template.marko: 104 (min) 98 (brotli)
const $clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", $scope.c <= 1 ? () => {
	$clickCount($scope, $scope.c + 1);
} : false));
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$clickCount__script($scope);
});
