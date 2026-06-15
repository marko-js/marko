// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let(13, ($scope) => {
	_text($scope.b, $scope.n);
	$n__script($scope);
});
