// total: 2740 (min) 1373 (brotli)
// template.marko: 100 (min) 85 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$count__script($scope);
});
