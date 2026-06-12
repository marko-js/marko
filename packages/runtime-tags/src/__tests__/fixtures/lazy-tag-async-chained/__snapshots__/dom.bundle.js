// child.marko
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$count__script($scope);
});
