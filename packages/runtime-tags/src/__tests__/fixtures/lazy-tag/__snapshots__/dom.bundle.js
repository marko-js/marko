// total: 136 (min) 111 (brotli)
// child.marko: 100 (min) 92 (brotli)
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$count__script($scope);
});
