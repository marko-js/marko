// template.marko
const $count__OR__$global_brand = /*@__PURE__*/ _global_or(3, ($scope) => {
	_text($scope.b, $scope.c + $scope.$.brand);
	$count__OR__$global_brand__script($scope);
}, /* @__PURE__ */ _global_closure("a3", /* @__PURE__ */ _global_key(5, "brand")));
const $count__OR__$global_brand__script = _global_script("a0", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + $scope.c + $scope.$.brand + "]", $count__OR__$global_brand);
const $count = _let(2, $count__OR__$global_brand);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
