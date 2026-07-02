// child.marko
const $count = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + $scope.$.config.step);
}));
