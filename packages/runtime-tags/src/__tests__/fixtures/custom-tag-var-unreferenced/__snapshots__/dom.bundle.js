// template.marko
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__script($scope);
});
