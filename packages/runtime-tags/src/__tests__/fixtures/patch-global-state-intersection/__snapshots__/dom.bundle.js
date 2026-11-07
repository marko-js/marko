// template.marko
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("a2", 3, ($scope) => _text($scope.a, $scope.$.brand + " #" + $scope.c));
const $count = _let(2, $count__OR__$global_brand);
const $global_brand = _fill_global("a0", $count__OR__$global_brand, "brand");
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
