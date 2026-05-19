// total: 2528 (min) 1325 (brotli)
// template.marko: 118 (min) 99 (brotli)
const $double = ($scope, double) => _text($scope.b, double);
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$double($scope, $scope.c * 2);
	$count__script($scope);
});
