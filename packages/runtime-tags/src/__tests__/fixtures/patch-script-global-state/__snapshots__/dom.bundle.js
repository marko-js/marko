// template.marko
const $count__OR__$global_brand__script = _script("a1", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + $scope.c + $scope.$.brand + "]");
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("a3", 3, ($scope) => {
	_text($scope.b, $scope.c + $scope.$.brand);
	$count__OR__$global_brand__script($scope);
});
const $count = _let(2, $count__OR__$global_brand);
const $global_brand = _fill_global("a0", $count__OR__$global_brand, "brand");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
