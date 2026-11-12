// template.marko
const $count__OR__$global_brand = /*@__PURE__*/ _global_or(($scope) => _text($scope.b, $scope.c + $scope.$.brand), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand")));
_global_script("a0", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + $scope.c + $scope.$.brand + "]", $count__OR__$global_brand);
const $count = _let(2, $count__OR__$global_brand);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
