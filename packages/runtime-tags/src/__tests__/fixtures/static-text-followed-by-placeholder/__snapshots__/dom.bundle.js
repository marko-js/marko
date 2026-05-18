// total: 2510 (min) 1314 (brotli)
// template.marko: 100 (min) 85 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.a, $scope.c);
	$count__script($scope);
});
