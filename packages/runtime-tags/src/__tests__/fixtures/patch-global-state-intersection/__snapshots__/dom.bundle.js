// template.marko
const $count = _let(2, /* @__PURE__ */ _global_or(3, ($scope) => _text($scope.a, $scope.$.brand + " #" + $scope.c), /* @__PURE__ */ _global_closure("a0", /* @__PURE__ */ _global_key(5, "brand"))));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
