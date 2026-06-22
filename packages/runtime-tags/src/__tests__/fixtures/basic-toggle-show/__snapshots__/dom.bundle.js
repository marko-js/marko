// template.marko
const $show__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.a, $scope.c ? "Hello!" : "");
	$show__script($scope);
});
