// template.marko
const $count = _let(3, /* @__PURE__ */ _global_or(4, ($scope) => _text($scope.b, $scope.d + $scope.$.brand), /* @__PURE__ */ _global_closure("a0", /* @__PURE__ */ _global_key(6, "brand"))));
const $global2 = /*@__PURE__*/ _global_closure("a4", /* @__PURE__ */ _global_key(5), ($scope) => $global2__script($scope));
const $global2__script = _global_script("a1", ($scope) => $scope.c.textContent = JSON.stringify($scope.$), $global2);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
