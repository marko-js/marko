// total: 136 (min) 111 (brotli)
// child.marko: 100 (min) 86 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$count__script($scope);
});
