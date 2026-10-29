// template.marko
const $count = _let(2, /* @__PURE__ */ _fill_global("a0", ($scope) => _text($scope.a, $scope.$.brand + " #" + $scope.c), "brand"));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
