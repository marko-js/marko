// template.marko
const $count = _let(2, /* @__PURE__ */ _global_or(($scope) => _text($scope.a, $scope.$.brand + " #" + $scope.c), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand"), "a0")));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
