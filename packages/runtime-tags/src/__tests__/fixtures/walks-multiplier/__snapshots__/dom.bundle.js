// template.marko
const $n = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	_text($scope.c, $scope.e);
	_text($scope.d, $scope.e + 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.e + 1);
}));
