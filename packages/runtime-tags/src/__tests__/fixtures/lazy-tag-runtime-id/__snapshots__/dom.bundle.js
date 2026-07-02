// child.marko
const $count = /* @__PURE__ */ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
