// template.marko
const $global_brand = /*@__PURE__*/ _global_closure("a0", /* @__PURE__ */ _global_key(6, "brand"));
const $count = _let(3, /* @__PURE__ */ _global_or(4, ($scope) => _text($scope.b, $scope.d + $scope.$.brand), $global_brand));
const $global_key = /*@__PURE__*/ _global_key(5);
const $global2__script = _script("a1", ($scope) => {
	$global2.r($scope);
	$scope.c.textContent = JSON.stringify($scope.$);
});
const $global2 = /*@__PURE__*/ _global_closure("a4", $global_key, $global2__script);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
