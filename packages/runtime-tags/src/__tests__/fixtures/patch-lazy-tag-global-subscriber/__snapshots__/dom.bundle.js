// child.marko
const $count = /*@__PURE__*/ _fill_let("a2", 2, /* @__PURE__ */ _global_or(($scope) => _text($scope.b, $scope.$.brand + ":" + $scope.c), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand"), "a0")));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
