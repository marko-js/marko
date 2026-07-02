// template.marko
const $n__script = _script("a0", ($scope) => console.log($scope.c));
const $n = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$n__script($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
