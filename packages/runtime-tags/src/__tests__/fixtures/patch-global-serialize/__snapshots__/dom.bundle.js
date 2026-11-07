// template.marko
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("a4", 4, ($scope) => _text($scope.b, $scope.d + $scope.$.brand));
const $count = _let(3, $count__OR__$global_brand);
const $global_brand = _fill_global("a1", $count__OR__$global_brand, "brand");
const $global2__script = _script("a2", ($scope) => $scope.c.textContent = JSON.stringify($scope.$));
const $global2 = _fill_global("a0", $global2__script, "");
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
