// template.marko
const $count = /* @__PURE__ */ _let(1, _script("a0", ($scope) => document.body.dataset.sum = `${$scope.b + 1 + ($scope.b + 2)}`));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.b + 1);
}));
