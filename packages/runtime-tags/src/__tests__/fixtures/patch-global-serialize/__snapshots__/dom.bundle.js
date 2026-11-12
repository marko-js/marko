// template.marko
const $count = _let(3, /* @__PURE__ */ _fill_global("a0", ($scope) => _text($scope.b, $scope.d + $scope.$.brand), "brand"));
const $global2 = _fill_global_script("a1", ($scope) => $scope.c.textContent = JSON.stringify($scope.$), "");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
