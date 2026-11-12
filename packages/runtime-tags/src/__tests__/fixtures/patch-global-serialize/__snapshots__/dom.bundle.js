// template.marko
const $count = _let(3, /* @__PURE__ */ _global_or(($scope) => _text($scope.b, $scope.d + $scope.$.brand), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand"), "a0")));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
const $global2__script = _global_script("a1", ($scope) => $scope.c.textContent = JSON.stringify($scope.$), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key()));
