// template.marko
const $show = /* @__PURE__ */ _show(1);
const $open__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.e);
}));
const $open = /* @__PURE__ */ _let(4, ($scope) => {
	$show($scope, $scope.e);
	$open__script($scope);
});
const $n__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.f + 1);
}));
const $n = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	$n__script($scope);
});
