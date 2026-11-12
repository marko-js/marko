// child.marko
const $global_brand = /*@__PURE__*/ _global_closure("a0", /* @__PURE__ */ _global_key(5, "brand"));
const $count = /*@__PURE__*/ _fill_let("a2", 2, /* @__PURE__ */ _global_or(3, ($scope) => _text($scope.b, $scope.$.brand + ":" + $scope.c), $global_brand));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
